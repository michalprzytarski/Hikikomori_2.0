using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Address
    {
        [Key]
        public int id { get; set; }
        public int post_code { get; set; }
        public int building_number { get; set; }
        public string street { get; set; }
        public string city { get; set; }
        public  List<Clinic> clinics { get; set; }
        public List<User> users { get; set; }

    }
}
