using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Referral
    {
        public int Id { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string Specjalization { get; set; }
        public string UserId { get; set; }

        public virtual User User { get; set; }
    }
}
