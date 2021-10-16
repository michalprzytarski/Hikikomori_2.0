using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class User
    {
        public User()
        {
            Appointments = new HashSet<Appointment>();
            Referrals = new HashSet<Referral>();
        }

        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public decimal TrustScore { get; set; }
        public int AddressId { get; set; }

        public virtual Address Address { get; set; }
        public virtual ICollection<Appointment> Appointments { get; set; }
        public virtual ICollection<Referral> Referrals { get; set; }
    }
}
