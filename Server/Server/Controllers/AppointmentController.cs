using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

    }

}
