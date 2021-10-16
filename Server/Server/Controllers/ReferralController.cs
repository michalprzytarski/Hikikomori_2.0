﻿using Microsoft.AspNetCore.Http;
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
    public class ReferralController : ControllerBase
    {
        private readonly hikikomoriMedicalDBContext _context;
        public ReferralController(hikikomoriMedicalDBContext context)
        {
            this._context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            IEnumerable<Referral> referrals = _context.Referrals;
            return new JsonResult(referrals.ToList());
        }
    }
}
