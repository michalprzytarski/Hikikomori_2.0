using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly hikikomoriMedicalDBContext _context;
        public AppointmentController(hikikomoriMedicalDBContext context)
        {
            this._context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            IEnumerable<Appointment> appointments = _context.Appointments;
            return new JsonResult(appointments.ToList());
        }
        [HttpGet("{Username}")]
        public JsonResult Get(string username)
        {
            IEnumerable<Appointment> appointments = _context.Appointments
                .Where(u => u.UserId == username)
                .Include(u => u.Doctor)
                .Include(d => d.Doctor.Clinic)
                .Include(u => u.User)
                .Include(u => u.User.Address)
                .Include(c => c.Doctor.Clinic.Address)
                .Include(r => r.Results);

            return new JsonResult(appointments);
        }
        [HttpPost]
        public JsonResult Post(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            _context.SaveChanges();
            return new JsonResult("OK");
        }
    }

}
