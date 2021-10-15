using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public class Doctor
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string  surname { get; set; }
        public string specialization { get; set; }
        public int clinic_id { get; set; }
        [ForeignKey("clinic_id")]
        public Clinic clinic { get; set; }
    }
}