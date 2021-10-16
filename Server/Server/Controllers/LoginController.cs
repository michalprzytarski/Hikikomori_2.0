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
    public class LoginController : ControllerBase
    {
        private readonly hikikomoriMedicalDBContext _context;
        public LoginController(hikikomoriMedicalDBContext context)
        {
            this._context = context;
        }

        [HttpGet("{username}/{password}")]
        public JsonResult CheckLogIn(string username, string password)
        {
            var currentUser = _context.Users.Where(u => u.Username == username && u.Password == password).FirstOrDefault();
            if (currentUser == null)
            {
                return new JsonResult(null);
            }
            return new JsonResult(currentUser);
        }
    }
}
