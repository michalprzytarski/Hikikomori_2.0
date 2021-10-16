using Microsoft.AspNetCore.Mvc;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly hikikomoriMedicalDBContext _context;
        public DoctorController(hikikomoriMedicalDBContext context)
        {
            this._context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            IEnumerable<Doctor> doctors = _context.Doctors;
            return new JsonResult(doctors.ToList());
        }

    }
}
