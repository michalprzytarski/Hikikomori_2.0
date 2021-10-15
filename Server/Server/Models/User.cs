using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class User
    {
        [Key]
        public string username { get; set; }
        public string password { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public DateTime birth_date { get; set; }
        public int address_id { get; set; }
        [ForeignKey("address_id")]
        public Address address { get; set; }
        public int trust_score { get; set; }
        public List<Referral> referrals { get; set; }
    }
}
