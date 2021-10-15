using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public class Clinic
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public int address_id {get; set; }
        [ForeignKey("address_id")]
        public Address address { get; set; }
        public List<Doctor> Doctors { get; set; }
    }
}