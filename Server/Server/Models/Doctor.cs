using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            Appointments = new HashSet<Appointment>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Specjalization { get; set; }
        public int ClinicId { get; set; }

        public virtual Clinic Clinic { get; set; }
        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}
