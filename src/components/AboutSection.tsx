import { useAppSelector } from '@/lib/hooks/useAppRedux';
import { Briefcase, Clock } from 'lucide-react';

function AboutSection() {
  const { about } = useAppSelector((state) => state.content);

  return (
    <section id="about" className="py-8 lg:py-16">
      <div className="container text-center lg:text-left">
        <div className="grid grid-cols-1 items-end justify-items-center gap-x-[1.875rem] gap-y-12 lg:grid-cols-12 lg:justify-items-start">
          <div className="max-w-md space-y-5 lg:col-span-6">
            <h2 className="text-5xl font-bold leading-snug">{about.title}</h2>
            {about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <ul className="flex flex-col items-center gap-6 text-xl font-bold leading-normal lg:col-span-4 lg:col-start-8 lg:items-start lg:gap-4">
            <li className="flex flex-col items-center gap-2 whitespace-nowrap lg:flex-row lg:gap-4">
              <Clock className="flex-shrink-0 text-primary" />
              <p>{about.status.filter((item) => item.id === 'experience')[0].text}</p>
            </li>
            <li className="flex flex-col items-center gap-2 whitespace-nowrap lg:flex-row lg:gap-4">
              <Briefcase className="flex-shrink-0 text-primary" />
              <p>{about.status.filter((item) => item.id === 'projects')[0].text}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
