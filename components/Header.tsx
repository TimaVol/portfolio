import Sun from "@/public/icons/sun.svg"

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-[12px] text-black">
      <h5 className="font-bold">My portfolio site...</h5>
      <div className="flex items-center">
        <p className="mr-[21px] font-bold">EN</p>
        <div className="rounded-[6px] bg-black p-[5px]">
          <Sun />
        </div>
      </div>
    </header>
  )
}
