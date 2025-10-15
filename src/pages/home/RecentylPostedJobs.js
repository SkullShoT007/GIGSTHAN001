export const RecentylPostedJobs = () => {
    const recentJobs = [
        {
            title: "Job_title",
            tags: ['Tag1', 'Tag2', 'Tag3']
        },
        {
            title: "Job_title",
            tags: ['Tag1', 'Tag2', 'Tag3']
        },
        {
            title: "Job_title",
            tags: ['Tag1', 'Tag2', 'Tag3']
        },
        {
            title: "Job_title",
            tags: ['Tag1', 'Tag2', 'Tag3']
        },

    ]
  return (
    <div className="m-10">
        <div>
            <h1 className="text-4xl text-customDarkBlue font-bold">Recently Posted Jobs</h1>
        </div>
        <div className="flex justify-between flex-wrap">
            {
                recentJobs.map((job) =>(
                    <div className="w-[43rem] bg-customLightBlue rounded p-5 mt-4">
                        <div>
                            <h1 className="text-2xl">{job.title}</h1>
                        </div>
                        <div className="flex justify-start gap-4 mt-6">
                            {
                                job.tags.map((tag) =>(
                                    <div className="bg-customDarkBlue text-customLightBlue rounded p-2">
                                        <p>{tag}</p>
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}
