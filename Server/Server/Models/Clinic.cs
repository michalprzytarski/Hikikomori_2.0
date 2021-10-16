using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Clinic
    {
        public Clinic()
        {
            Doctors = new HashSet<Doctor>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int AddressId { get; set; }

        public virtual Address Address { get; set; }
        public virtual ICollection<Doctor> Doctors { get; set; }
    }
}
