export interface ApplicationItem {
  id: string;
  number: string;
  title: string;
  category: 'IoT & Remote Telemetry' | 'Embedded & FPGA' | 'Turbomachinery & Propulsion' | 'SCADA & Workstations' | 'Marine & Test Cells' | 'Machinery Protection';
  image: string;
  summary: string;
  description: string;
  architecture: string[];
  signalsAndIO: string[];
  protocols: string[];
  keyCapabilities: string[];
  hardwareHighlight: string;
}

export const APPLICATIONS_DATA: ApplicationItem[] = [
  {
    id: 'analog-remote-transmitters',
    number: '01',
    title: 'Analog Remote Transmitter Cloud Monitoring',
    category: 'IoT & Remote Telemetry',
    image: '/assets/application/AnalogRemoteTransmittersCloudMonitoring.png',
    summary:
      'Multi-channel remote transmitter telemetry receiver and cloud supervisory station with real-time multi-point analog voltage/current monitoring and database event archiving.',
    description:
      'Designed for mission-critical remote telemetry sites, this supervisory system provides continuous multi-point analog voltage and current monitoring (-70V to +70V), multi-channel VoIP communication verification, and automated database logging. Each input channel features independent live analog gauge instrumentation, threshold trip limits, and polarity validation across airport, meteorological, and infrastructure telemetry installations.',
    architecture: [
      '24-Channel Analog Signal Conditioning (Ch00–Ch23)',
      'Dual VoIP Communication Channels with Sound & Polarity Verification',
      'Multi-Tier Server Pipeline: SQL Server, Real-time Data Server & Audio Server',
      'High-Speed Circular Binary Buffer (BIN-Data) with SQL Long-Term Archiving',
    ],
    signalsAndIO: [
      '24x Analog Voltage/Current Inputs (-70V to +70V DC)',
      'VoIP Channel Monitoring & Polarity Sense',
      'Hardware State Relays (Active / Closed / Idle)',
      'Aviation & Meteorological Telemetry Feed Inputs',
    ],
    protocols: [
      'TCP/IP Industrial Ethernet',
      'SQL Database Protocol',
      'VoIP Streaming Protocol',
      'Proprietary Telemetry Packet Bus',
    ],
    keyCapabilities: [
      'Per-channel live analog dial & bar telemetry readout',
      'Dual-tier database logging (High-speed Binary + Relational SQL)',
      'Live channel audio and signal verification',
      'Automated site health diagnostics with voltage threshold trips',
    ],
    hardwareHighlight: 'Multi-Channel Telemetry Receiver & High-Throughput SQL/BIN Ingestion Engine',
  },
  {
    id: 'fpga-temperature-logger',
    number: '02',
    title: 'Temperature Graphical FPGA Data Logger',
    category: 'Embedded & FPGA',
    image: '/assets/application/Temperature Graphical FPGA Data Logge.png',
    summary:
      'High-speed multi-channel graphical temperature data logging and transient thermal analysis system powered by deterministic FPGA acquisition hardware.',
    description:
      'Engineered for rigorous thermal profiling and transient heat transfer studies, this FPGA-based logging system captures high-speed temperature transients up to 300°C across 8 synchronized thermocouple/RTD channels without sample jitter. The console provides real-time multi-trace transient curves, dynamic rate-of-rise calculation, and automated dual-threshold alarm limits for laboratory and industrial furnace qualification.',
    architecture: [
      'Deterministic Hardware FPGA Acquisition Core',
      '8-Channel Thermocouple / RTD Signal Conditioning',
      'High-Resolution Transient Plotting Engine (0°C to 300°C)',
      'Integrated High-Speed Circular Memory with Zero Dropped Samples',
    ],
    signalsAndIO: [
      '8x High-Precision Thermocouple / RTD Analog Channels',
      'Hardware Setpoint Alarm State Outputs',
      'System Trigger & Synchronization Pulse I/O',
      'Network Stream Socket Interface',
    ],
    protocols: [
      'Deterministic FPGA High-Speed Bus',
      'TCP/IP Ethernet Network Streaming',
      'Synchronous Serial Peripheral Bus',
      'CSV / Binary Real-Time Data Export',
    ],
    keyCapabilities: [
      'Sub-millisecond transient thermal curve capture',
      'Simultaneous 8-channel bar indicator displays with setpoints',
      'Rate-of-temperature-rise (°C/sec) calculation',
      'Automated test cycle run/stop triggering and CSV archiving',
    ],
    hardwareHighlight: 'Embedded FPGA Real-Time Core with Deterministic Microsecond Sampling',
  },
  {
    id: 'gas-turbine-supervisory',
    number: '03',
    title: 'Gas Turbine Supervisory System',
    category: 'Turbomachinery & Propulsion',
    image: '/assets/application/Gas Turbine Supervisory System.png',
    summary:
      'Comprehensive turbomachinery supervisory control, data acquisition, and automated test-cell instrumentation configured for twin-spool gas turbine engine platforms.',
    description:
      'Engineered specifically for twin-spool gas turbine engines (including LARZAC 04C6 turbofan platforms), this system provides full-envelope supervisory monitoring across high-speed rotational spools, multi-point pressure and temperature arrays, and 3-axis vibration sensors. The interface calculates thermodynamic efficiencies, validates spool acceleration rates, and trips automated emergency shutdowns if exhaust gas temperatures (EGT) or bearing vibrations exceed safety envelopes.',
    architecture: [
      'Dual-Spool Speed Instrumentation: N1 (0–60,000 RPM) & N2 (0–10,000 RPM)',
      'Thermodynamic Multi-Stage Pressure & Temperature Acquisition Skids',
      '3-Axis Bearing & Casing Vibration Tripping Matrix (mils)',
      'Automated Operating Point Logic: Take-Off, Idle, 65%, 96%, and 98%',
    ],
    signalsAndIO: [
      'N1 & N2 Spool Frequency Pickups (Eddy current / Magnetic)',
      'Dynamometer Torque (lb·ft) & Fuel Flow Rate (L/h)',
      'Pressure Array: P.Inlet, P.Disch 1/2, P.Bleed, P.Oil, P.Water, Delta P, P2',
      'Temperature Array: T0–T11, T.Oil, T.Water, T.Fuel, T.Bleed, EGT (up to 800°C)',
      '3x Bearing Vibration Sensors (Vib-1, Vib-2, Vib-3 in mils)',
    ],
    protocols: [
      'High-Speed Analog & Frequency Counter I/O',
      'Modbus RTU / TCP Engine Telemetry',
      'Deterministic Industrial SCADA Bus',
      'Direct Hardwired Emergency Trip Interlocks',
    ],
    keyCapabilities: [
      'Full turbine operating envelope monitoring (Idle through 98% Take-Off)',
      'Multi-stage thermodynamic pressure and temperature profiling',
      'Bearing vibration amplitude monitoring and trip protection',
      'Dynamometer power absorption and fuel consumption telemetry',
    ],
    hardwareHighlight: 'Twin-Spool Turbine Test Cell Controller with Multi-Tier Safety Tripping',
  },
  {
    id: 'scada-data-acquisition',
    number: '04',
    title: 'SCADA Data Acquisition System',
    category: 'SCADA & Workstations',
    image: '/assets/application/SCADA Data Acquisition System.png',
    summary:
      'Integrated 19-inch industrial rackmount operator workstation coupled with multi-plot real-time data acquisition and transient analysis software.',
    description:
      'Combining a ruggedized 19" rack-mount control console with multi-variable SCADA plotting software, this system delivers industrial plant supervision and laboratory data logging. Operators can split real-time traces across dual, multi, or quad coordinate plots, freeze waveforms for transient investigation, and dynamically remap X/Y channels across turbine speeds, oil temperatures, electrical amperages, and mechanical vibration vectors.',
    architecture: [
      'Ruggedized 19" 4U Rackmount Industrial Workstation Chassis',
      'Integrated Industrial LCD, QWERTY Membrane Keyboard & F1–F10 Function Keys',
      'Multi-Plot Real-Time Graphing Architecture (Dual, Multi & Quad Windows)',
      'Lockable Storage Bay with Removable High-Capacity Logging Media',
    ],
    signalsAndIO: [
      'Multi-Channel High-Speed Analog Inputs (Speed, Temp, Pressure, Vib)',
      'Industrial Digital I/O Channels for Relay Control & Status Sensing',
      'Dual Amperage & Voltage Measurement Skids',
      'Hardware Trigger & Timebase Synchronization Inputs',
    ],
    protocols: [
      'Industrial Ethernet TCP/IP',
      'Modbus RTU / Fieldbus Communication',
      'High-Speed Internal DAQ Bus Interface',
      'SQL / Binary Event Archiving Stream',
    ],
    keyCapabilities: [
      'Quad-quadrant simultaneous real-time plot viewing (Steady load, cooling, ambient)',
      'Dynamic X-axis and Y-axis channel remapping with custom scaling',
      'Waveform utilities: Real-time Pan, Interactive Zoom, and Trace Freeze',
      'Heavy-duty industrial enclosure built for harsh control room environments',
    ],
    hardwareHighlight: '19-Inch Industrial Rackmount Workstation with Integrated Tactical Controls',
  },
  {
    id: 'marine-engine-test-bench',
    number: '05',
    title: 'Supervisory Controlled Marine Diesel Engine Test Bench',
    category: 'Marine & Test Cells',
    image: '/assets/application/Supervisory Controlled Marine Diesel Engine Test Bench.png',
    summary:
      'Turnkey automated marine propulsion test bench and dynamometer supervisory control system designed for engine performance mapping and endurance qualification.',
    description:
      'An end-to-end automated marine engine test cell integrating engine governors, dynamometer load cells, fuel flow meters, and exhaust gas analyzers. Controlled through an industrial modular DAQ controller rack communicating over TCP/IP Engine SCADA to an operator console, this system executes automated endurance protocols, logs emission compositions, and monitors mechanical shaft stress under variable marine propulsion loads.',
    architecture: [
      'Modular Industrial PAC / DAQ Controller Rack (National Instruments cFP / cRIO)',
      'Dedicated 19" Rackmount SCADA Operator Workstation over TCP/IP',
      'Inline Propeller Shaft Torque Transducer & Telemetry Dynamometer',
      'Integrated Marine Throttle Governor & Helm Servo Control System',
    ],
    signalsAndIO: [
      'Fuel Injector Flow & Cylinder Pressure Telemetry',
      'Shaft Torque & RPM Dynamometer Signals',
      'Omega Differential Pressure, Temperature & Humidity Transmitters',
      'Portable Exhaust Gas Analyzer / Emissions Sampler Serial Feed',
      'Fuel Level Transducers, Fuel Temp & Return Flow Sensors',
    ],
    protocols: [
      'TCP/IP Engine SCADA Bus',
      'Modbus TCP / Serial RS-485 Instrument Links',
      'CANbus / SAE J1939 Marine Engine Telemetry',
      'Isolated 4-20mA Current Loops & RTD Sensor Lines',
    ],
    keyCapabilities: [
      'Automated engine throttle mapping & dynamometer load governing',
      'Continuous shaft torque, horsepower, and brake specific fuel consumption (BSFC)',
      'Synchronized exhaust gas composition and emissions logging',
      'Fail-safe engine shutdown interlocks upon abnormal coolant/oil levels',
    ],
    hardwareHighlight: 'Modular PAC/cFP Real-Time Automation Rack with Inline Dynamometer Telemetry',
  },
  {
    id: 'rotor-dynamics-order-tracking',
    number: '06',
    title: 'Rotor Dynamics Order Tracking System',
    category: 'Machinery Protection',
    image: '/assets/application/Rotor Dynamics Order Tracking System.png',
    summary:
      'Advanced turbomachinery rotor dynamics, order tracking, and API 670 machinery protection system engineered for multi-casing rotating equipment trains.',
    description:
      'Engineered for critical industrial turbomachinery trains (comprising Steam Turbines, Air Compressors, N2 Compressors, and Expander Turbines), this system performs continuous API 670 vibration analysis and order tracking. Using orthogonal eddy current proximity probes and keyphasor speed pickups, it detects unbalance, misalignment, oil whirl, and blade pass harmonics while routing safety shutdown signals to emergency plant trips.',
    architecture: [
      'Multi-Casing Turbomachinery Train Architecture (Steam Turbine → Compressors → Expander)',
      'Real-Time cFP / PAC Controller with Dedicated High-Speed Vibration Processing',
      'Industrial Ethernet Switch Fabric Interconnecting HMI, Engineering Workstation & DCS',
      'Hardwired Fail-Safe Machinery Protection & Emergency Shutdown (ESD) Relays',
    ],
    signalsAndIO: [
      'Orthogonal (X-Y) Radial Vibration Eddy Current Probes at Each Journal Bearing',
      'Dual Axial Thrust Probes at Thrust Collars',
      'Keyphasor Shaft Speed & Angular Reference Probes',
      'Bearing Metal Thermocouple Array along Entire Turbotrain',
      'Dedicated Safety Shutdown Relay Trip Contacts',
    ],
    protocols: [
      'API 670 Machine Protection Standard Architecture',
      'Modbus DCS Distributed Control System Interface',
      'Industrial Ethernet TCP/IP Network',
      'High-Speed Dynamic Vibration Waveform Sampling',
    ],
    keyCapabilities: [
      'Order tracking harmonic analysis (1X, 2X, nX running speeds)',
      'Radial vibration and shaft center-line orbit determination',
      'Bode and Nyquist phase/amplitude run-up and coast-down plots',
      'Hardware-level trip signal activation within milliseconds of critical thresholds',
    ],
    hardwareHighlight: 'API 670 Compliant Vibration Core with Direct Hardwired Plant Safety Relays',
  },
];
