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
    public class AddressController : ControllerBase
    {
        private readonly hikikomoriMedicalDBContext _context;
        public AddressController(hikikomoriMedicalDBContext context)
        {
            this._context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            IEnumerable<Address> addresses = _context.Addresses;
            return new JsonResult(addresses.ToList());
        }
    }
}
