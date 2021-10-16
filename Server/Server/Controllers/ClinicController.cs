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
    public class ClinicController : ControllerBase
    {
        private readonly hikikomoriMedicalDBContext _context;
        public ClinicController(hikikomoriMedicalDBContext context)
        {
            this._context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            IEnumerable<Clinic> clinics = _context.Clinics;
            return new JsonResult(clinics.ToList());
        }
    }
}
