using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Result
    {
        public int Id { get; set; }
        public int AppointmentId { get; set; }
        public string Description { get; set; }

        public virtual Appointment Appointment { get; set; }
    }
}
