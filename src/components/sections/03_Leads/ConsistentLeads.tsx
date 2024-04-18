// Core
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Utils
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";

// UI
import Container from "../../layout/Container";
import BarChart from "../../ui/BarChart";
import Stats from "../../ui/Stats";
import SectionHeading from "../../Typography/SectionHeading";
import Paragraph from "../../Typography/Paragraph";

const ConsistentLeads = () => {
  return (
    <section className="relative bg-white py-[107px]">
      <Container>
        <SectionHeading>
          {`Consitent leads flow to streamline\nYour business growth.`}
        </SectionHeading>
        <Paragraph className="mt-[58px] max-w-[578px]">
          We combine disruptive marketing techniques with proven tech solutions
          to provide maximum business value.
        </Paragraph>
        <BarChart
          bars={[27, 53, 61, 58, 30, 63, 55, 63, 71, 76, 67, 88, 78, 90]}
        />
        <Stats
          stats={[
            {
              number: 1570,
              label: "Revenue generated\nfor clients",
            },
            {
              number: 1200,
              label: "Conversations\nopened",
            },
            {
              number: 378,
              label: "Leads generated\nvia targeted",
            },
            {
              number: 197,
              label: "Calls scheduled\nfor clients",
            },
          ]}
        />
      </Container>
    </section>
  );
};

export default ConsistentLeads;
