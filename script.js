document.addEventListener('DOMContentLoaded', function () {
    const completedJobs = [
        { jobtitle: 'Plumbing Work', jobtype: 'Plumbing', company: 'ABC Plumbing', location: 'New York' },
        { jobtitle: 'Electrical Fix', jobtype: 'Electrical', company: 'XYZ Electrical', location: 'Los Angeles' },
        { jobtitle: 'Carpentry Project', jobtype: 'Carpentry', company: 'Home Carpentry', location: 'Chicago' }
    ];

    const jobsList = document.getElementById('jobs-list');

    function createCard(job) {
        const card = document.createElement('div');
        card.className = 'card';

        const jobContent = `
            <h3>${job.jobtitle}</h3>
            <p><strong>Job Type:</strong> ${job.jobtype}</p>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <button class="report-button">Report</button>
        `;

        card.innerHTML = jobContent;

        card.querySelector('.report-button').addEventListener('click', () => {
            alert('Report submitted for review.');
        });

        return card;
    }

    completedJobs.forEach(job => {
        jobsList.appendChild(createCard(job));
    });
});
