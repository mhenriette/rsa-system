import ApplicantRow from "../ui/ApplicantRow";

interface ApplicantsProps {
    applicants: any
  }

export default function Applicants({ applicants }: ApplicantsProps) {
  return       (
  <div className="text-black bg-white px-5">
    <div className="grid grid-cols-5 h-16 border-b border-b-gray-800 border-opacity-50 items-center">
    <p className="font-medium">Name</p>
    <p className="font-medium">Email</p>
    <p className="font-medium">District</p>
    <p className="font-medium">Contact</p>
    <p className="font-medium">Occupation</p>
  </div>
  {applicants.map((applicant:any) => (
    <ApplicantRow key={applicant.id} applicant={applicant} />
  ))}
</div>)
}