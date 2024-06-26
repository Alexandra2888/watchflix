/* eslint-disable @next/next/no-img-element */
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

interface AccountMenuProps {
  visible?: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const {data: user} = useCurrentUser();
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-zinc-800 rounded">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/images/default-blue.png"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4' />
        <div onClick={() => signOut()} className='px-3 text-center text-white text-sm hover:underline'>
          Sign Out of WatchFlix
        </div>
      </div>
    </div>
  );
};
export default AccountMenu;
