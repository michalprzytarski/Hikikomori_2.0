using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Server.Models
{
    public partial class Appointment
    {
        public Appointment()
        {
            Results = new HashSet<Result>();
        }

        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public int DoctorId { get; set; }
        public string UserId { get; set; }
        [ForeignKey("DoctorId")]
        public virtual Doctor Doctor { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public virtual ICollection<Result> Results { get; set; }
    }
}
