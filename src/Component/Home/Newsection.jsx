import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Newsection = () => {
  return (
    <div className="w-5/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-5">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full text-xl mt-10 font-bold"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl  no-underline bg-blue-200 rounded-xl px-5 font-semibold">
            What is an artifact?
          </AccordionTrigger>
          <AccordionContent className="bg-[#DBEAFE] rounded-xl px-5 mt-0.5">
            An artifact is any object made, modified, or used by humans,
            typically of historical or cultural significance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl no-underline mt-5 bg-blue-200 rounded-xl px-5 font-semibold">
            How are artifacts classified?
          </AccordionTrigger>
          <AccordionContent className="bg-[#DBEAFE] rounded-xl px-5 mt-0.5">
            Artifacts can be classified by material (e.g., stone, metal,
            ceramic), function (e.g., tools, weapons, religious items), or time
            period (e.g., ancient, medieval, modern).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl no-underline mt-5 bg-blue-200 rounded-xl px-5 font-semibold">
            Where are artifacts found?
          </AccordionTrigger>
          <AccordionContent className="bg-[#DBEAFE] rounded-xl px-5 mt-0.5">
            Artifacts are discovered in archaeological excavations, underwater
            sites, caves, tombs, and even accidental finds during construction
            projects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl no-underline mt-5 bg-blue-200 rounded-xl px-5 font-semibold">
            What should I do if I find an artifact?
          </AccordionTrigger>
          <AccordionContent className="bg-[#DBEAFE] rounded-xl px-5 mt-0.5">
            If you find an artifact, do not remove or disturb it. Report it to
            local archaeological or historical authorities.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Newsection;
