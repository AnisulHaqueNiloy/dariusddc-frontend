

const RegisteredUsers = () => {
    return (
       <div className=" p-4 mb-6">
                <h2 className="text-2xl font-bold text-black mb-4">Registered Users!</h2>
                {(() => {
                  const stats = [
                    { value: 1151, label: 'Total Users' },
                    { value: 145, label: 'User This Month' },
                    { value: '45k', label: 'Total Coin Sold' },
                    { value: '$2145', label: 'Revenue' },
                  ];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                      {stats.map((stat, idx) => (
                        <div
                          key={stat.label}
                          className="flex-1 min-w-[180px] bg-gradient-to-r from-[#04BDEC] to-[#0490DC] rounded-xl px-6 py-4 text-white flex flex-col items-center justify-center shadow-md"
                        >
                          <div className="text-3xl font-bold mb-1">{stat.value}</div>
                          <div className="text-base font-medium opacity-90">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  );
                })()}
            </div>
    );
};

export default RegisteredUsers;