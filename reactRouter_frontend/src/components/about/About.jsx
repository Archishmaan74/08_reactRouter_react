export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:4/12 lg:w-4/12">
            <img
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React development is driven by passionate developers who thrive on
              building dynamic, efficient, and user-friendly web applications.
              These developers deeply understand component-based architecture,
              making it easier to break down complex UIs into manageable pieces.
              They actively follow best practices, write clean code, and use
              powerful tools like JSX, hooks, and context.
            </p>
            <p className="mt-4 text-gray-600">
              These passionate React developers are constantly learning and
              evolving with the ecosystem. They explore libraries like React
              Router, Redux, and Tailwind CSS to enhance user experience and
              design. Whether building personal projects or large-scale
              applications, their enthusiasm fuels innovation and performance
              optimization. Their collaborative mindset and love for
              problem-solving make React development a rewarding and impactful
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
