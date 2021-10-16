using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Address
    {
        public Address()
        {
            Clinics = new HashSet<Clinic>();
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public decimal PostCode { get; set; }
        public int BuildingNumber { get; set; }
        public string Street { get; set; }
        public string City { get; set; }

        public virtual ICollection<Clinic> Clinics { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
