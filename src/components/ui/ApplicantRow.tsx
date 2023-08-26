export default function ApplicantRow({ applicant }: any) {
  return (
    <div className="grid grid-cols-5 leading-[21.6px] text-base text-gray-700 h-16 items-center border-b border-b-[#1B1A1A] border-opacity-10">
      <p>{applicant.First_name} {applicant.last_name}</p>
      <p>{applicant.email}</p>
      <p>{applicant.district}</p>
      <p>{applicant.contact}</p>
      <p>{applicant.occupation}</p>
    </div>
  );
}