using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Appointment
    {
        [Key]
        public int id { get; set; }
        public DateTime date { get; set; }
        public int clinic_id { get; set; }
        [ForeignKey("clinic_id")]
        public Clinic clinic { get; set; }
        public int doctor_id { get; set; }
        [ForeignKey("doctor_id")]
        public Doctor doctor { get; set; }
    }
}
