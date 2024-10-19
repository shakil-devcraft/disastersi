import { useState } from "react";


const ChatComponent = () => {
  // const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  // chat button text
  const chatBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      {/* chat icon or btn */}
      <div className={`fixed bottom-5 w-12 h-12 right-5 rounded-full flex items-center justify-center ${isOpen ? "bg-white text-t-primary shadow-lg" : "bg-primary text-white shadow-lg"} `}>
        <button className="" onClick={chatBtn}>{isOpen ? <i className='text-2xl bx bx-x' ></i> : <i className='text-2xl bx bxs-message-rounded' ></i>}</button>
      </div>

      {
        isOpen && (<div className="fixed bottom-20 right-5 w-[331px] bg-white shadow-lg rounded-lg ">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center bg-orange-500 text-white p-4 rounded-t-lg">
              <h3 className="text-lg font-bold leading-[22.95px]">Chat with Cypher</h3>
            </div>


            {/* chatting text */}
            <div className="px-4 pt-5">
              {/* right side chatting text */}
              <div className="float-right w-[80%] bg-black rounded-[7px] p-4 ">
                <p className="text-[12px] leading-[19px] text-white">Lorem ipsum dolar sit general sac mascho werho</p>
              </div>

              {/* left side chatting text */}
              <div className="float-left w-[80%] bg-transparent mt-3 border-2 border-[#F4F4F5] rounded-[7px] p-4 ">
                <p className="text-[12px] leading-[19px] text-t-secondary">Lorem ipsum dolar sit general sac mascho werho</p>
              </div>
              <div className="float-left w-[80%] bg-transparent mt-3 border-2 border-[#F4F4F5] rounded-[7px] p-4 ">
                <p className="text-[12px] leading-[19px] text-t-secondary">Lorem ipsum dolar sit general sac mascho werho</p>
              </div>

              {/* right side chatting text */}
              <div className="float-right w-[80%] bg-black mt-3 rounded-[7px] p-4 ">
                <p className="text-[12px] leading-[19px] text-white">Lorem ipsum dolar sit general sac mascho werho</p>
              </div>

              <div>
                <input
                  type="text"
                  className=" my-4 border text-[12px] py-2 px-3 w-full rounded-[7px] outline-none"
                  value=""
                  placeholder="Enter your message..."
                />
              </div>

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <i className='text-t-secondary text-[20px] bx bx-camera'></i>
                  <i className='text-t-secondary text-[20px] bx bx-image' ></i>
                  <i className='text-t-secondary text-[20px] bx bx-link-alt' ></i>
                </div>
                <div>
                  <button className="bg-[#F26922] rounded-full py-2 px-[25px] text-white font-normal text-[12px] ">Send</button>
                </div>
              </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default ChatComponent;

