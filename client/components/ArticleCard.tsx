import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";
import Button from "./Button";
import Router, { useRouter } from "next/router";

const ArticleCard = ({post}) => {

  const router = useRouter()
  return (
    <div className="flex w-[85%] flex-col  space-y-6 font-jakarta  text-white ">
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90fGVufDB8fDB8fA%3D%3D&w=1000&q=80)`,
        }}
        className="flex h-[30rem]  flex-col items-center justify-between rounded-2xl bg-cover bg-no-repeat p-4"
      >
        <div className="flex w-full justify-end">
          <div className="flex rounded-full bg-[#fedfd5] p-3">
            <Icon className="h-8 w-8" icon="fluent-emoji:fire" />
          </div>
        </div>
        <div className="flex w-max items-center justify-between space-x-3 rounded-full bg-white px-3 py-2 drop-shadow-2xl">
          <img
            className="h-12 w-12 rounded-full  "
            src={images.profile.src}
            alt=""
          />
          <span className="font-medium text-gray">Zohar Williams</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold leading-10 ">
        {post.title}
      </h2>
      <p className="text-base font-medium leading-8 text-gray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere
        deleniti dolorum aut facilis?
      </p>

      <div className="flex space-x-10 border-t-2 border-gray text-gray pt-4 font-medium !mb-4 ">
        <div className="flex items-center space-x-3">
          <Icon className="h-6 w-6" icon="akar-icons:calendar" />
          <span className="text-sm w-max ">01 Aug 2022</span>
        </div>

        <div className="flex items-center space-x-3">
          <Icon  className="h-6 w-6" icon="akar-icons:eye" />

          <span className="text-sm w-max ">10K Viewers</span>
        </div>
      </div>

      <Button
onClick={()=>router.push('/details')}
        text="Read More"
        extra=" border-2 border-gray justify-center text-gray hover:bg-blue hover:text-white hover:border-none transition-all"
      />
    </div>
  );
};

export default ArticleCard;
