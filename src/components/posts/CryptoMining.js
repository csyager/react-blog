import CryptoCalc from "../CryptoCalc";

function CryptoMiningPost() {
    return(
        <div className="container post-content">
            <h1 className="display-4">How to Mine Ethereum Using Phoenix Miner and Ethermine</h1>
            <h5 className="text-muted">Apr 26, 2021</h5><br />
            <p className="post-body">One of the more fun and interesting things that I've done over quarantine was build a gaming PC.  This was something I had been wanting to do for some time, but was intimidated by the costs of all of the components.  This problem was magnified by recent price surging for graphics cards, the component responsible for rendering images on the screen.  Demand has been particularly high lately because of the profitability of using the graphics card component to mine cryptocurrencies.  Cryptocurrency mining is a system of verifying transactions between other buyers and sellers of the currency, via the highly compute-intensive task of solving hash functions, which basically means brute-force searching for a particular cryptographic hash value.  Currently, the most profitable cryptocurrency for at-home miners is Ethereum.  DIY miners can make a few dollars a day, usually fewer than $5, by just running their PCs while not in use.  While a few dollars a day may not sound like much, over the course of the month you could make over $100, which eclipses the initial cost of the component within just a few months.  Essentially, the graphics card becomes a lucrative investment, even at the inflated rates.</p>
            <p>The chief cost of mining is energy costs.  For cryptocurrencies like Bitcoin, the energy costs without a highly-optimized infrastructure end up overcoming the expected value of the currency being mined, making it a poor choice for at-home miners.  Ethereum, on the other hand, has a much less difficult hash function to solve, making it the ideal mining currency for those of us just wanting to make money off of our compute power when we aren't using the computer.  I wrote this quick tool below to calculate expected returns from running your PC for a full 24 hours.  Hash rates are largely dependent on your GPU make and model, and you can find good approximations online.  Plug your estimated hash rate and electricity costs and draw into the calculator below, and you should get a relatively-accurate approximation of your expected returns.</p>
            <CryptoCalc /><br />
            <p>If you've found that you could be making a few bucks a day with your PC that would otherwise lay idle, I'll walk you through the configuration that I'm using.  I went with PhoenixMiner as a mining application and Ethermine as my miner pool, mostly out of ease of setup, but there are plenty of other options if you'd prefer to go another route.</p>
            <hr />
            <h2>Setting up PhoenixMiner</h2>
            <p>PhoenixMiner is an open-source miner, which is the program that will be running on your computer to calculate hashes.  Visit <a href="https://github.com/PhoenixMinerDevTeam/PhoenixMiner/releases/" target="_blank" rel="noreferrer">their Github page</a> to download the latest release, for either Windows or Linux.  Save the unzipped files somewhere that you can access them easily later.</p>
            <p>Next, open the unzipped directory, and right-click start_miner.bat and click "Edit" (I'm assuming for the rest of this tutorial that you're running on Windows).  Near the bottom, you should see an uncommented line that has a short batch command.  I'm running in the US, so replace the first part of the domain, where it says <code>eu1</code> with <code>us1</code>, set your port number to 5555, and repeat for the second pool.  Next, after the <code>-wal</code> argument, enter the address of your Ethereum wallet (if you don't have a wallet, you're going to need to make one.  I use Coinbase, but there are many options).  The last line before <code>pause</code> should now look something like this:</p>
            <pre><code>
{`PhoenixMiner.exe -pool ssl://us1.ethermine.org:5555 -pool2 ssl://us1.ethermine.org:5555 -wal [YOUR WALLET ADDRESS HERE]
`}             
            </code></pre>
            <p>And that's pretty much it!  PhoenixMiner is now configured.</p>
            <hr />
            <h2>Joining the Ethermine Pool</h2>
            <p>Next, we need to join a mining pool.  The basic principle here is that since it's highly unlikely that you'll personally mine a block, we network with other miners and take a share of the profits of a mined block proportional to how hard our computer is working, measured as a hashrate in megahashes/second (MH/s), while Ethermine takes a 1% cut of the earnings.  If you don't have an Ethermine account, you'll need to create one.  In the Miner Address field in the navbar, enter your wallet address, the same one that you used for the PhoenixMiner setup.  Once this is done, you should see a dashboard with a few graphs and a lot of zeroes.  This dashboard will populate once you start the miner, and is a good place to monitor your earnings!</p>
            <hr />
            <h2>MSI Afterburner</h2>
            <p>MSI Afterburner is the tool of choice for adjusting the hardware-level settings of your computer.  This tool let's us adjust things like clock cycle and power intake, which will help us maximize our hashrates.  You can download Afterburner from the <a href="https://www.msi.com/Landing/afterburner/graphics-cards" target="_blank" rel="noreferrer">MSI product page</a>.</p>
            <p>Your optimal Afterburner settings will depend on your graphics card model.  A quick Google search will usually yield results.  Usually, the settings we'll be working with are underclocking the Core clock (reducing the clock speed for the CPU component), overclocking the GPU (increasing the clock speed for that component), and undervolting the system (reducing the power intake).  I'm working with an Nvidia RTX-3060, one of the lowest-end models of the 3000 series.  The settings I've found work best for me are to reduce the core clock by 500 MHz and increase the GPU clock by 1000 MHz.  Be careful when making these adjustments, anything too crazy and your computer may crash.  Usually this isn't too big of a deal, but I would rely on the advice of others online before you start tweaking the settings too dramatically.</p>
            <p>Something worth mentioning that may add a little difficulty to the operation is that due to the shortage of graphics cards and demands from consumers wanting the card to become available, Nvidia has recently been putting "locks" on some models that artificially inhibit the hash rate, to decentivize people from buying them for mining.  Of course, this pretty much goes directly against Nvidia's interest in making money, so they "accidentally" removed the locks in some of their beta releases, then removed the releases from their downloads page.  If this is the case for your model, the good news is you can still find the beta drivers online with a good Google search.  Make sure that the driver release that you're working with has the lock removed, and you should have no problem getting good mining performance out of your card.</p>
            <hr />
            <h2>Starting the Miner</h2>
            <p>Once your settings are where you'd like them, return to the PhoenixMiner files, and double click the start_miner.bat file to start mining.  A command prompt window will open, and you'll start to see logs printed to it.  The big thing you want to watch is your Eth speed, measured in MH/s.  Open up the Ethermine console to monitor the progress, but it will take a few minutes for the changes to propogate.  And that's it!  If you're seeing PhoenixMiner print jobs and shares found every few seconds you should be good to go!  As it runs, the numbers and graphs in Ethermine should start to populate.</p>
            <p>For the first while, keep an eye on the temperature of your graphics card in Afterburner, to make sure it stays within the load parameters specified for your card.  Running the card too hot can cause damage, or throttle your hash rate.  If everything looks good, you should be starting to make returns on your graphics card investment in no time!  Happy mining!</p>
        </div>
    );
}

export default CryptoMiningPost;