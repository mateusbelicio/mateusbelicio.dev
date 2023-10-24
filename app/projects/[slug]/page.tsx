// import { useRef } from 'react';
// import { motion } from 'framer-motion';

// import { useProjects } from '@/lib/hooks/useProjects';
// import { AspectRatio } from '@/components/ui/aspect-ratio';
// import ProjectDetails from '@/components/ProjectDetails';
// import { useLoaderData, useParams } from 'react-router-dom';

// function Project() {
//   const { currentProject } = useProjects();
//   const { slug } = useParams();
//   const data = useLoaderData();
//   const container = useRef<HTMLDivElement>(null);

//   console.log(data);

//   return (
//     <main>
//       <section>section</section>
//     </main>
//   );

//   return (
//     <main>
//       <section>
//         <motion.div
//           className="flex max-h-64 items-center justify-center overflow-hidden opacity-20"
//           layoutId={`${currentProject?.id}-project-image`}
//         >
//           <AspectRatio
//             ratio={16 / 9}
//             className="overflow-hidden rounded-lg rounded-t-none bg-muted"
//           >
//             <img
//               className="w-full object-cover"
//               src={currentProject?.thumbnail}
//               alt={`Thumbnail of ${currentProject?.title} project`}
//             />
//           </AspectRatio>
//         </motion.div>

//         <ProjectDetails>
//           <ProjectDetails.Navigation>
//             {currentProject.sections.map((section) => (
//               <ProjectDetails.NavigationLink key={section.id} id={section.id}>
//                 {section.title}
//               </ProjectDetails.NavigationLink>
//             ))}
//           </ProjectDetails.Navigation>

//           <ProjectDetails.Content ref={container} title={currentProject?.title}>
//             {currentProject.sections.map((section) => (
//               <ProjectDetails.Section key={section.id} id={section.id} title={section.title}>
//                 {section.content.split('\n').map((text, index) => (
//                   <p key={index}>{text}</p>
//                 ))}
//               </ProjectDetails.Section>
//             ))}
//           </ProjectDetails.Content>
//         </ProjectDetails>
//       </section>
//     </main>
//   );
// }

// export default Project;
