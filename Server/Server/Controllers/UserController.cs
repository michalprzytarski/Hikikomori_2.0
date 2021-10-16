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

        [HttpGet("{Username}/{Password}")]
        public JsonResult Get(string username, string password)
        {
            IEnumerable<User> users = _context.Users;
            var currentUser = _context.Users.Where(u => u.Username == username && u.Password == password).FirstOrDefault();
            if (currentUser == null)
            {
                return new JsonResult(null);
            }
            return new JsonResult(currentUser);
        }
       
    }
}
