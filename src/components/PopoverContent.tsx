/* eslint-disable @typescript-eslint/no-explicit-any */

interface PopoverContentProps {
  user?: any;
  initial?: string;
  list: any;
}

export default function PopoverContent({
  user,
  initial,
  list,
}: PopoverContentProps) {
  return (
    <div className="w-[350px]">
      <div className="p-4">
        <div className="flex gap-4 items-center">
          {initial && (
            <div className="w-[32px] h-[32px] bg-gradient-to-l from-[#131316] to-[#5C6670] rounded-full flex items-center justify-center">
              <p className="text-[12px] text-white font-semibold text-center">
                {initial}
              </p>
            </div>
          )}
          {user && (
            <div>
              <p className="text-[18px]">{`${user.first_name} ${user.last_name}`}</p>
              <p className="mt-1">{user.email}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {list?.map((item: any, index: number) => (
          <div
            className="flex items-center gap-4 p-4 hover:bg-[#EFF1F6] cursor-pointer"
            key={index}
          >
            <div className="text-[22px]">{item.icon}</div>
            <p className="text-[16px]">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
