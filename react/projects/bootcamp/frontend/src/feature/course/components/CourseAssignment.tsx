export const CourseAssignment = () => (
  <div className="h-screen overflow-hidden">
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-3xl font-bold">Assignment</p>
        <ul className="list-disc">
          <li>
            Fetch the course info from the API using RTK Query instead of the
            loader
          </li>
          <li>Render the course UI: Non è importante sia bello</li>
          <li>Create Product on Stripe Dashboard</li>
          <li>Inserire su strapi il payment link e il product id</li>
          <li>Implement the payment flow: vedi bootcamp</li>
          <li>Implement unsubscription flow</li>
          <li>
            Invito ad andare all'interno della folder backend/src/api e leggere
            il codice all'interno dei controller e routes
          </li>
        </ul>
      </div>
    </div>
  </div>
)
