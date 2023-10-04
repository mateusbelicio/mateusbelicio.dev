import { Briefcase, Clock } from 'lucide-react';

function AboutSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-12 items-end gap-x-[1.875rem]">
          <div className="col-span-6 space-y-5">
            <h2 className="text-5xl font-bold leading-snug">Nice to meet you</h2>
            <p>
              Journey today timepoint alpha and. Long mifflin line both baked journey wiggle. Point
              breakout land pain give.
            </p>
            <p>
              Web for goto domains per. Across race tomorrow circle cta tomorrow users create.
              Algorithm low-hanging principles should in. Eat game cross obviously devil the emails
              supervisor version sorry.
            </p>
          </div>
          <ul className="col-span-4 col-start-8 flex flex-col gap-4 text-xl font-bold leading-normal">
            <li className="flex items-center gap-4">
              <Clock className="text-primary" />
              <p>1+ year of experience</p>
            </li>
            <li className="flex items-center gap-4">
              <Briefcase className="text-primary" />
              <p>50+ projects</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
