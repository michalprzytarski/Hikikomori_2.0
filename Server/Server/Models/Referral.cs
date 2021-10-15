using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Referral
    {
        [Key]
        public int id { get; set; }
        public DateTime expiration_date { get; set; }
        public string specialization { get; set; }
        public string user_id { get; set; }
        [ForeignKey("user_id")]
        public User User { get; set; }
    }
}
