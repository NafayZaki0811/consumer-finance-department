'use client';
import Link from "next/link";
import { useState } from "react";

const initialItems =[
    {label: 'Smart Desk' ,href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fsmartdesk.mbl.int%2fmaximo%2fwebclient%2flogin%2flogin.jsp%3fappservauth%3dtrue&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-647e6d0b3a76a7febacd663e14d1c1b59c82df33"
    },
    {label: 'Cognos',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=http%3a%2f%2fmbl%2dcognosgw01.mbl.int%2fibmcognos%2fbi%2f&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-e3ec398655e6b1b0fb32256cf63fdfe8d33cc744"
    },
    {label: 'Digital World',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fdigitalworld.mbl.int%2fapps%2flogin%2forg%2findex.html&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-4581286be3dcd5983988ff1f40118d48be788fc4"
    },
    {label: 'Meezan HRMS',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2febs11.mbl.int%3a4443%2fOA%5fHTML%2fAppsLocalLogin.jsp%3frequestUrl%3dhttps%253A%252F%252Febs11.mbl.int%253A4443%252FOA%5fHTML%252FRF.jsp%253Ffunction%5fid%253D43374%2526resp%5fid%253D50748%2526resp%5fappl%5fid%253D800%2526security%5fgroup%5fid%253D0%2526lang%5fcode%253DUS%2526oas%253D9AWf8PgnD4yO167%5fW9LRVA..%2526params%253Dx2mo4tgVsiBmdXoCNpwP1kkwaxMe3L8sLt8KX9CGE3g%26cancelUrl%3dhttps%253A%252F%252Febs11.mbl.int%253A4443%252FOA%5fHTML%252FAppsLogin%26langCode%3dUS&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-5e5ad8f01a04f6382fd0eb34e600c0faaa19a57b"
    },
    {label: 'Oracle Application Cloud',href:
      "https://login-ewvh-saasfaprod1.fa.ocs.oraclecloud.com/oam/server/obrareq.cgi?encquery%3DB%2FoDONur%2Fa6zaU%2FN0OTAy5Ay6fh9UbHvaNBUvMUOZ9xOuyIW5QAbpZueinFhCrvWObGgQeaBa3wPRsVU9U%2BnOGFV4XTRThNNNm4xJEbZW%2BpJj%2B%2Bj%2FIZJggtQACcKEcb01IrxGYTCz3HXX6GRFpZCCd9osOMEhUQ%2BLvYaqAdgi%2FbPd8C6TqsXaj8ZD4NNGLpJlo5eucJ2K1bgbY7wxL2hLHFt9AqgUbhgHxEDTvVEs%2BXHqu8tg4RrjSkzZvgsf0KLzWS8miJPzSeexZL5h8%2FVzR3EozAnKFhuD6P%2FAIxA%2F2XpwZ%2BEfjhBBjDOL9xfErO0EwLn1k8dlwnGompJ0Oa12eezJOdEmW6ECtfAzjNqigd85GDMGVkhVJBXEVebBvsoNwpvOYD4G4gtszg1RGoJ2pgyvidfnJNQpViMH1rRRijeaolKvfbktPpdtRCEAOaE8HHL45SGL2eSTA8t0JfbGeN224wnNCet%2F4GXxMEq%2BXSkebWnDNyOESpKzRxzcx1gLGrwOcoKLZmnXSZlZFLAjJ9Blw0UWfz9SvwT7QpwS%2Fvp27BnHV0B%2FwvUhmIgtbSl1XMyRpmTyDWV%2FM1obK%2Bk9aWeJW%2B5yHC0ZDSBtNwv%2Fm6nqsJiEuXuGbs957wNYCrX%2FYlaS9jIkSJVu0wT1I5uxX8syoeasWkX4h3qSEbK8sW6NuefySq%2Fh5VSNDeTwgdU8rjiLlcQMCgV4kXC2zo%2BUZhhq%2F6fynsaMp6sC51t60CggVLUd8XZJzOJpiSXChmF%2BFCXEfIRl6xBfs 7Mpm2bwWCkh9TD%2FcOAucl1A33vT2mIcyyNHeAy2wrS8JuSxKcQhmY4vHaYsp8dxWSoIv1whGmux3kuU1esUXXKf6jLVKM4NgFsAxdDJYlpeZ6dFz9vgTe7TX3Kq377zfYsxUDULiL0mzghsMfjYz1X4IHsSGLnQ%2FsIajBUs%2BngE%2F%2BXs7XPEdYb%2FDw5MGPzCdrqxXOOyV4L%2BIADfKpJ05BS7zqncauU1Co4Z%2BKPiQD2Z3QCBvu2ZzS8a5wGldwpvpp2vCaw1Qo4YNxMwhG%2FULFkqmxOlD044l9T9t8FjxyzY3EOnHY2CsQ93zYfTCNJxxgl7KC5eluPwCvsrETUS73ArQrFTRH6vXqbwvlfnCVrHwb6QAPCjrfKlgOSuYrT%2F1up%2FQ2aRaDXVCM8s1abuVr6Ta%2FERfWR0mdFlZzifvHt7SmJ3tPvcBIlvGxv0epqOziSpEC4QWuBTkXen15VJm6gzWafJXr9vqF3EPL0jwjBzNjxpZx6O5sabiK4rtQjpKomYMFRHwGcBMr2IvZZbDqZEUmu%2BWLxMhpZ6Tr0OcMQAtZisKTsLq7WqgGRLJpSe3zjMW57bwyh8P7ALj9N3xcKStuPu84TbF2hRR%2F0kGtDcvHuOmwO4c9FT6%2FqAwFl%2BJDmXOtc6imaeKXjNYJ1kDR5fFxKVg%2Bnk9bSWXxOA6JY2kjMQDPp25%2FKjWpNtX5ArWVSM4M6t018QAAekcFLMvprizkF8Je5L8ozHA%2FUEtIosEirgWPhMCU%2Fgv8xpQonKTPo1%2B1CEMVz%2FK3fFu3CQROzGO47pT9V%2FezI6JTreqs5M9i1cuHHoCaEcBukD88khJTziKTSei1dak%2FDL9sxA%2FR6eWKteORm9vOgdXFFUptou0YVfrHBBphL%2FhUCnnAdUJhMHVeVIQ%3D%3D%20agentid%3DOraFusionApp_11AG%20ve r%3D1%20crmethod%3D2%26cksum%3D3722d5eeef6c9c7abb546 dd31e92f4842f87b158&ECID-Context=1.006ID2GUpIQ2JRMayLjc6G00CjER0000EK%3BkXjE"
    },
    { label: 'Bike FAS' ,href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fbf.cfas.mbl.int%2f%23%2flogin&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-812c3be69e118c285c6d0e87737c7659a4a3f57c"
    },
    {label: 'Car Ijarah FAS',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fci.cfas.mbl.int%2f%23%2flogin&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-25998cac07e3d12dec01f1deb2d46be012dc55cc"
    },
    {label: 'Solar FAS',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fsf.cfas.mbl.int%2f%23%2flogin&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-3c6b89336f3cbc88f7ea4aad7170fe450376c2aa"
    },
    {label: 'Easy Home FAS',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2feh.cfas.mbl.int%2f%23%2flogin&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-e6655f4c7cbc3975c27525f2df8d2016b7c1b674"
    },
    {label: 'Consumer Ease FAS',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fce.cfas.mbl.int%2f%23%2flogin&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-294938ca37aaa716d8109b24688346c0712bed80"
    },
    {label: 'Meezan Automation Portal',href:
      "https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fautomation.mbl.int%2f&umid=8BD227FD-48D1-4306-91AF-F0AA6DD7133D&auth=18337470c3ffb0cec6b46048ea9448f43914d35e-2cee67200d3bcb317e0648191606587a0236f62c"
    },
    
    
  ];

export default function Page() {
  const [items, setItems] = useState(initialItems);

  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-start pt-16 bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images.jpg')",
        backgroundSize: "100% auto",
      }}
    >
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src="/meezan-bank-logo.png"
          alt="Meezan Bank Logo"
          className="w-38 mb-10"
        />
        <h1 className="text-white text-4xl font-bold tracking-wide text-center">
          Consumer Finance Department
        </h1>
      </div>

      {/* Grid */}
      <div className="mt-8 w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-6">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center
                       w-40 aspect-[5/3]
                       rounded-2xl
                       bg-white/10 backdrop-blur-md
                       text-white hover:bg-white/20
                       transition duration-300
                       hover:-translate-y-1 hover:shadow-xl
"
                       
          >
            <span className="text-sm font-semibold text-center">
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setShowAdd(true)}
          className="px-3 py-2 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300 cursor-pointer text-sm"
          style={{
              background: "rgb(112,30,125)",
              // color: "rgb(112,30,125)",
              
            }}
        >
          Add Short Cut
        </button>
        <button
          onClick={() => setShowDelete(true)}
          className="px-3 py-2 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 cursor-pointer text-sm"
        >
          Delete Short Cut
        </button>
      </div>

      {/* Add Modal */}
      {showAdd && (
        <ModalAdd
          onClose={() => setShowAdd(false)}
          onSubmit={() => {
            if (!label || !href) return;
            setItems((prev) => [...prev, { label, href }]);
            setLabel("");
            setHref("");
            setShowAdd(false);
          }}
          label={label}
          href={href}
          setLabel={setLabel}
          setHref={setHref}
        />
      )}

      {/* Delete Modal */}
      {showDelete && (
        <ModalDelete
          onClose={() => setShowDelete(false)}
          onSubmit={() => {
            setItems((prev) => prev.filter((item) => item.label !== label));
            setLabel("");
            setShowDelete(false);
          }}
          label={label}
          setLabel={setLabel}
        />
      )}
    </main>
  );
}

// Add Modal Component
function ModalAdd({ onClose, onSubmit, label, href, setLabel, setHref }: any) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-80 shadow-2xl relative">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Container</h2>

        <input
          placeholder="Short Cut Name"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-black"
        />

        <input
          placeholder="Short Cut URL"
          value={href}
          onChange={(e) => setHref(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-black"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
             style={{
              background: "rgb(112,30,125)",
              // color: "rgb(112,30,125)",
              
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// Delete Modal Component
function ModalDelete({ onClose, onSubmit, label, setLabel }: any) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-96 shadow-2xl relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Delete Container</h2>

        <input
          placeholder="Enter Short Cut Name to Delete"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 text-black"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

