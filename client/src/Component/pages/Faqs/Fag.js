import React, { useState } from "react";
import image from "./../../../assets/doctor/mehedi.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Fag() {
  const faqs = [
    {
      id: 1,
      question: "What is your medical care?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      id: 2,
      question: "What happens if I need to go a hospital?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      id: 3,
      question: "What happens if I need to go a hospital?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      id: 4,
      question: "Can I visit your medical office?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      id: 5,
      question: "Does you provide urgent care?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
  ];
  const [open, setopen] = useState(false);
  const toggel = () => {
    setopen(!open);
  };

  return (
    <div className="w-full h-full mx-auto bg-gray-100 ">
      <div className="mx-10 flex flex-col gap-5 md:gap-10 md:flex-row py-10 ">
        <div className="md:w-[600px] w-full p-4 ">
          <div className="overflow-hidden">
            <img
              className="md:h-[400px] w-full h-[200px] hover:scale-125 duration-500 rounded-md "
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="md:mx-20 md:w-[600px] flex w-full flex-col ">
          <h1 className="text-2xl font-bold text-gray-700">
            Most Question by our belongs <br /> Patients
          </h1>

          <div className="mt-7 relative">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <div
                  onClick={toggel}
                  className="border relative border-gray-300 p-2"
                >
                  <h1>{faq.question}</h1>
                  <div
                    className={` ${
                      open && "bg-blue-500 text-white"
                    } absolute top-2 text-xl border border-gray-500
               font-bold right-2 `}
                  >
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                </div>
                {open && (
                  <div>
                    <p>{faq.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
