const TableComponent = () => {
    const projects = [
      {
        name: "Material XD Version",
        budget: "$14,000",
        completion: 60
      },
      {
        name: "Add Progress Track",
        budget: "$3,000",
        completion: 10
      },
      {
        name: "Fix Platform Errors",
        budget: "Not set",
        completion: 100
      },
      // ... other projects
    ];
  
    return (
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Companies</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Budget</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Completion</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
           {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
           {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
           {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
           {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{project.name}</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{project.budget}</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div 
                      className={`flex justify-center items-center h-full text-white ${project.completion === 100 ? 'bg-gradient-to-tr from-green-600 to-green-400' : 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          


        </tbody>
      </table>
    );
  };
  
  export default TableComponent;
  