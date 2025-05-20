
import MemberIdCertificate from "@/components/certificate/MemberIdCertificate";
import { prisma } from "@/lib/db";
import Link from "next/link";
const MemberIdCard = async ({ params }: { params: { memberId: string } }) => {
  const memberId = params.memberId;
  const memberInfo = await prisma.member.findUnique({
    where: {
      id: Number(memberId),
    },
  });
  if (memberInfo) {
    return (
      <MemberIdCertificate
        First_name={memberInfo.First_name}
        last_name={memberInfo.last_name}
        id={memberInfo.id}
        category={memberInfo.category}
        unit={memberInfo.unit_name}
        district={memberInfo.district}
      />
    );
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">
        Member With ID `{params.memberId}` does not exist🙂
      </h1>
      <Link
        href="/"
        className="bg-purple-800 px-9 py-3 text-center text-white my-10 rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
};

export default MemberIdCard;
