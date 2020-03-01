using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SprayBoothV2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {
        private static readonly List<Job> jobs = new List<Job>()
        {
            new Job()
            {
                PO = 12345,
                Customer = "Test Customer",
                Description = "Test Description",
                DateRecieved = DateTime.Now,
                DateDue = DateTime.Now,
                Quantity = 123,
                Condition = "WIP"
            }

        };

        // GET: api/Job
        [HttpGet]
        public IEnumerable<Job> Get()
        {
            return jobs;
        }

        // POST: api/Job
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Job/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
