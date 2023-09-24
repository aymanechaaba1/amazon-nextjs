type Props = {
  questions: Question[];
};

function QuestionsAnswers({ questions }: Props) {
  return (
    <div className="">
      <h2 className="font-medium mb-4">Questions & Answers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 items-start">
        {questions?.map((question) => (
          <div className="border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <p className="rounded-full p-3 bg-orange-400 text-center flex justify-center items-center text-white w-4 h-4 text-xs">
                {question.votes}
              </p>
              <p>{question.votes > 1 ? 'Votes' : 'Vote'}</p>
            </div>

            <p className="font-medium">{question.title}</p>
            <div>
              {question.answers?.map((answer) => (
                <div>
                  <p>{answer.content}</p>
                  <p className="text-xs mt-2">{answer.timestamp}</p>
                  <p className="mt-5">{answer.author}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsAnswers;
