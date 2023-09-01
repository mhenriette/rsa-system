interface ReportSummaryProps {
  content: string;
  author: string;
  createdAt: string;
}

export default function ReportSummary({ content,  author, createdAt }: ReportSummaryProps) {
  return (
    <div className="leading-[21.6px] flex justify-between text-base text-gray-700 py-3 items-center border-b border-b-[#1B1A1A] border-opacity-10">
      <div>
        <p className="text-xl font-medium">{content.length <= 10 ? content : content.slice(0, 10) + "..."}</p>
      <p className="italic text-gray-600">{author}</p>
      </div>
      <p className="self-start">{createdAt}</p>
    </div>
  );
}