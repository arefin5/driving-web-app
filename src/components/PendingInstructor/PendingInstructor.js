import { Image } from "@nextui-org/react";

const PendingInstructor = ({ user }) => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div>
        <Image
          width="300"
          height="300"
          src="https://img.icons8.com/nolan/64/book-reading.png"
          alt="book-reading"
          className="mx-auto"
        />
        <div className="text-center space-y-3">
          <h2 className="text-3xl primary-text-color font-roboto font-bold uppercase">
            pending Setup
          </h2>
          <p className="text-xl second-text-color font-semibold max-w-3xl mx-auto text-center">
            we are preparing your account, it will take jsut a few minutes
          </p>
          <p className="text-xl capitalize">
            your email:{" "}
            <span className="second-text-color font-semibold lowercase">
              {user?.email}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PendingInstructor;
