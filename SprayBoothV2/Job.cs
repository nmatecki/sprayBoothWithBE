using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SprayBoothV2
{
    public class Job
    {
        public int PO { get; set; }
        public string Customer { get; set; }
        public string Description { get; set; }
        public DateTime DateRecieved { get; set; }
        public DateTime DateDue { get; set; }
        public int Quantity { get; set; }
        public string Condition { get; set; }
    }
}
