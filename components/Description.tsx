export default function Description() {
  return (
    <div className="text-center my-16">
      <h2 className="text-xl my-4 underline">
        Automatically Organize Your Notes
      </h2>
      <div className="text-center">
        <ol className="steps steps-vertical min-w-fit">
          <li className="step step-primary font-bold">Write</li>
          <li className="step step-primary font-bold">Index</li>
          <li className="step step-primary font-bold">Remember</li>
        </ol>
      </div>
      <div className="text-left">
        <div className="my-8">
          <h4 className="font-bold text-lg my-2">Write</h4>
          <p className="mx-2">
            Write your notes like you usually do, keeping clear bounderies
            between different notes and without worrying about organizing
            different subjects.
          </p>
        </div>
        <div className="my-8">
          <h4 className="font-bold text-lg my-2">Index</h4>
          <p className="mx-2">
            At the end of each day, index your notes in our database. Save a
            quick description along with the date and page number of each.
          </p>
        </div>
        <div className="my-8">
          <h4 className="font-bold text-lg my-2">Remember</h4>
          <p className="mx-2">
            Need a recipe you wrote down two months ago? A formula from your
            class 2 years ago? Search through your index and find the exact page
            number.
          </p>
        </div>
      </div>
    </div>
  );
}
