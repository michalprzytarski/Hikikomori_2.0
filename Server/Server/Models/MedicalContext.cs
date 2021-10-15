using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class MedicalContext:DbContext
    {
        public MedicalContext(DbContextOptions<MedicalContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Appointment> Appointments  { get; set; }
        public DbSet<Clinic> Clinics { get; set; }
        public DbSet<Referral> Referrals { get; set; }
    }
}
