using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly hikikomoriMedicalDBContext _context;

        public UserController(hikikomoriMedicalDBContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public JsonResult Get(User user)
        {
            var lala = _context.Users.Where(u => u.Username == user.Username && ).FirstOrDefault();
            if (lala == null)
            {
                // nie ma takieogo gościa 
            }
            IEnumerable<User> users = _context.Users;
            return new JsonResult(users.ToList());
        }
       
    }
}
