const questions = [

    // =====================================================
    // STANDARD CONCEPTS
    // =====================================================

    {
        id: 1,
        sourcePage: 5,
        category: "Standard Concepts",
        type: "single",

        question:
            "How is given the IP Address 172.16.199.25 and the subnet mask 255.255.252.0. What is the CIDR notation for this address?",

        choices: [
            "172.16.100.25/22",
            "172.16.100.25/21",
            "172.16.100.25/23",
            "172.16.100.25/20"
        ],

        answer: 0,
        sourceIssue: true
    },

    {
        id: 2,
        sourcePage: 6,
        category: "Standard Concepts",
        type: "single",

        question:
            "How is the following IP address written when using CIDR notation? IP Address: 192.168.0.16, Subnet Mask: 255.255.255.240",

        choices: [
            "192.168.0.16/30",
            "192.168.0.16/15",
            "192.168.0.16/28",
            "192.168.0.16/24"
        ],

        answer: 2
    },

    {
        id: 3,
        sourcePage: 7,
        category: "Standard Concepts",
        type: "single",

        question:
            "What is the CIDR prefix notation for a subnet mask of 255.255.0.0?",

        choices: [
            "/24",
            "/8",
            "/16",
            "/32"
        ],

        answer: 2
    },

    {
        id: 4,
        sourcePage: 8,
        category: "Standard Concepts",
        type: "single",

        question:
            "A host is given the IP address 172.16.100.25 and the subnet mask 255.255.252.0. Which CIDR notation is correct?",

        choices: [
            "172.16.100.25/23",
            "172.16.100.25/20",
            "172.16.100.25/21",
            "172.16.100.25/22"
        ],

        answer: 3
    },

    {
        id: 5,
        sourcePage: 9,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which address is included in the 192.168.200.0/24 network?",

        choices: [
            "192.168.199.13",
            "192.168.200.13",
            "192.168.201.13",
            "192.168.1.13"
        ],

        answer: 1
    },

    {
        id: 6,
        sourcePage: 10,
        category: "Standard Concepts",
        type: "single",

        question:
            "What is the most compressed valid format of the IPv6 address 2001:0db8:0000:0016:0000:001b:2000:0056?",

        choices: [
            "2001:db8::16::1b:2:56",
            "2001:db8::16::1b:2000:56",
            "2001:db8:16::1b:2:56",
            "2001:db8:0:16::1b:2000:56"
        ],

        answer: 3
    },

    {
        id: 7,
        sourcePage: 11,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which address is included in the 192.168.200.0/24 network?",

        choices: [
            "192.168.200.13",
            "192.168.201.13",
            "192.168.1.13",
            "192.168.199.13"
        ],

        answer: 0
    },

    {
        id: 8,
        sourcePage: 12,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which address is a link-local IPv6 address?",

        choices: [
            "FDF8:F535:82EF::53",
            "FE80::261:2EFE:FE10:765",
            "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
            "2401:db00:21:70e4:face:0:3:0"
        ],

        answer: 1
    },

    {
        id: 9,
        sourcePage: 13,
        category: "Standard Concepts",
        type: "single",

        question:
            "At which OSI layer is the data stream broken up into segments that include source and destination port numbers?",

        choices: [
            "Network",
            "Session",
            "Transport",
            "Data Link"
        ],

        answer: 2
    },

    {
        id: 10,
        sourcePage: 14,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which information is included in the header of a UDP segment?",

        choices: [
            "Port Numbers",
            "IP Address",
            "Sequence Numbers",
            "MAC Address"
        ],

        answer: 0
    },

    {
        id: 11,
        sourcePage: 15,
        category: "Standard Concepts",
        type: "single",

        question:
            "During the data encapsulation process, which OSI layer adds a header that contains MAC addressing information and a trailer used for error checking?",

        choices: [
            "Network",
            "Session",
            "Transport",
            "Data Link"
        ],

        answer: 3
    },

    {
        id: 12,
        sourcePage: 16,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which protocol allows you to securely upload files to another computer on the internet?",

        choices: [
            "SFTP",
            "HTTP",
            "NTP",
            "ICMP"
        ],

        answer: 0
    },

    {
        id: 13,
        sourcePage: 21,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which command will display all the current operational settings configured on a Cisco router?",

        choices: [
            "show protocols",
            "show startup-config",
            "show version",
            "show running-config"
        ],

        answer: 3
    },

    {
        id: 14,
        sourcePage: 25,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which protocol does an IPv6 host use to resolve the MAC address associated with a destination IPv6 address?",

        choices: [
            "Address Resolution Protocol (ARP)",
            "Cisco Discovery Protocol (CDP)",
            "Neighbor Discovery Protocol (NDP)",
            "Dynamic Host Configuration Protocol (DHCP)"
        ],

        answer: 2
    },

    {
        id: 15,
        sourcePage: 26,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which protocol is used by an IPv6-enabled host to perform automatic stateless address configuration?",

        choices: [
            "DHCPv6",
            "ICMPv6",
            "TFTP",
            "DNS"
        ],

        answer: 1
    },

    {
        id: 16,
        sourcePage: 27,
        category: "Standard Concepts",
        type: "single",

        question:
            "During the data encapsulation process, which OSI layer adds a header that contains MAC addressing information and a trailer used for error checking?",

        choices: [
            "Network",
            "Transport",
            "Data Link",
            "Session"
        ],

        answer: 2
    },

    {
        id: 17,
        sourcePage: 28,
        category: "Diagnosing Problems",
        type: "single",

        question:
            "A user initiates a trouble ticket stating that an external web page is not loading. You determine that other resources both internal and external are still reachable. Which command can you use to help locate where the issue is in the network path to the external web page?",

        choices: [
            "ping -t",
            "tracert",
            "ipconfig/all",
            "nslookup"
        ],

        answer: 1
    },

    {
        id: 18,
        sourcePage: 29,
        category: "Infrastructure",
        type: "multiple",
        required: 2,

        question:
            "Which two statements are true about the IPv4 address of the default gateway configured on a host?",

        choices: [
            "The IPv4 address of the default gateway must be the first host address in the subnet.",
            "The same default gateway IPv4 address is configured on each host on the local network.",
            "The default gateway is the Loopback0 interface IPv4 address of the router connected to the same local network as the host.",
            "The default gateway is the IPv4 address of the router interface connected to the same local network as the host.",
            "Hosts learn the default gateway IPv4 address through router advertisement messages."
        ],

        answer: [1, 3]
    },

    {
        id: 19,
        sourcePage: 30,
        category: "Infrastructure",
        type: "multiple",
        required: 2,

        question:
            "Which two statements are true about the IPv4 address of the default gateway configured on a host?",

        choices: [
            "The IPv4 address of the default gateway must be the first host address in the subnet.",
            "The same default gateway IPv4 address is configured on each host on the local network.",
            "The default gateway is the Loopback0 interface IPv4 address of the router connected to the same local network as the host.",
            "The default gateway is the IPv4 address of the router interface connected to the same local network as the host.",
            "Hosts learn the default gateway IPv4 address through router advertisement messages."
        ],

        answer: [1, 3]
    },

    {
        id: 20,
        sourcePage: 31,
        category: "Infrastructure",
        type: "single",

        question:
            "An engineer configured a new VLAN named VLAN2 for the Data Center team. When the team tries to ping addresses outside VLAN2 from a computer in VLAN2, they are unable to reach them. What should the engineer configure?",

        choices: [
            "Additional VLAN",
            "Default route",
            "Default gateway",
            "Static route"
        ],

        answer: 2
    },

    {
        id: 21,
        sourcePage: 32,
        category: "Standard Concepts",
        type: "single",

        question:
            "Which information is included in the header of a UDP segment?",

        choices: [
            "IP addresses",
            "Sequence numbers",
            "Port numbers",
            "MAC addresses"
        ],

        answer: 2
    },

    {
        id: 22,
        sourcePage: 33,
        category: "Infrastructure",
        type: "single",

        question:
            "What is the purpose of assigning an IP address to the management VLAN interface on a Layer 2 switch?",

        choices: [
            "To enable access to the CLI on the switch through Telnet or SSH",
            "To enable the switch to provide DHCP services to other switches in the network",
            "To enable the switch to act as a default gateway for the attached devices",
            "To enable the switch to resolve URLs for the attached devices"
        ],

        answer: 0
    },

    {
        id: 23,
        sourcePage: 34,
        category: "Infrastructure",
        type: "single",

        question:
            "Which of the following is a characteristic of the Spanning Tree Protocol (STP)?",

        choices: [
            "Prevents loops in a network by blocking redundant links.",
            "Provides load balancing across multiple paths in a network.",
            "Prioritizes network traffic based on Quality of Service settings.",
            "Allows for rapid convergence by eliminating the need for spanning tree calculations."
        ],

        answer: 0
    },

    {
        id: 24,
        sourcePage: 36,
        category: "Infrastructure",
        type: "single",

        question:
            "What information is contained in the MAC address table of a switch?",

        choices: [
            "Dynamically learned Layer 2 and Layer 3 addresses of devices communicating on active ports on the switch",
            "The MAC addresses of devices communicating on active ports and static MAC addresses configured by the administrator",
            "All active ports on the switch and the host Layer 3 addresses dynamically learned on each port",
            "MAC addresses to IP address mappings learned through ARP requests or manually configured by the administrator"
        ],

        answer: 1
    },

    {
        id: 25,
        sourcePage: 37,
        category: "Standard Concepts",
        type: "single",

        question:
            "What is the purpose of a subnet mask?",

        choices: [
            "Determine the network portion of an IP address",
            "Determine the host portion of an IP address",
            "Determine the default gateway for a network",
            "Determine the DNS server for a network"
        ],

        answer: 0
    },

    {
        id: 26,
        sourcePage: 38,
        category: "Diagnosing Problems",
        type: "single",

        question:
            "A user at your company cannot connect to a website on the internet. However, they can connect to network resources on the company LAN. You want to use the divide and conquer approach to troubleshoot the issue. What should you do first?",

        choices: [
            "Run the Telnet command from the user's computer",
            "Ping the default gateway from the user's computer",
            "Check the computer's cable connections",
            "Check the computer's network adapter"
        ],

        answer: 1
    },

    {
        id: 27,
        sourcePage: 39,
        category: "Diagnosing Problems",
        type: "single",

        question:
            "Your company has 20 Cisco switches throughout its building. You need to view the configuration of each switch from the command line. Which protocol should you use?",

        choices: [
            "FTP (File Transfer Protocol)",
            "RDP (Remote Desktop Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "SNMP (Simple Network Management Protocol)"
        ],

        answer: 3,
        sourceIssue: true
    },


    // =====================================================
    // SECURITY
    // =====================================================

    {
        id: 28,
        sourcePage: 42,
        category: "Security",
        type: "single",

        question:
            "Which device protects the network by permitting or denying traffic based on IP address, port number, or application?",

        choices: [
            "Firewall",
            "Access point",
            "VPN gateway",
            "Intrusion detection system"
        ],

        answer: 0
    },

    {
        id: 29,
        sourcePage: 43,
        category: "Security",
        type: "single",

        question:
            "How does a firewall determine which traffic to block?",

        choices: [
            "The firewall matches traffic based on the IP address in the ARP table",
            "The firewall performs a one-to-many network address translation",
            "The firewall matches the traffic based on source and destination IP address",
            "The firewall performs a one-to-one network address translation"
        ],

        answer: 2
    },

    {
        id: 30,
        sourcePage: 45,
        category: "Security",
        type: "single",

        question:
            "Which best describes confidentiality with regards to network security?",

        choices: [
            "Ensures data is available for access by providing redundant systems.",
            "Ensures data is not changed during transit between systems.",
            "Ensures data is kept secret using safeguards to prevent unauthorized access.",
            "Ensures data is trusted and has not been tampered with or changed."
        ],

        answer: 2
    },

    {
        id: 31,
        sourcePage: 46,
        category: "Security",
        type: "single",

        question:
            "Which component of the AAA service security model provides identity verification?",

        choices: [
            "Authentication",
            "Accounting",
            "Auditing",
            "Authorization"
        ],

        answer: 0
    },

    {
        id: 32,
        sourcePage: 47,
        category: "Security",
        type: "single",

        question:
            "When setting up a wireless network, which security benefit is provided by enabling WPA3?",

        choices: [
            "Limits network access to only specified devices",
            "Sends traffic through an encrypted tunnel",
            "Secures authentication between client and access point",
            "Makes it more difficult to discover the wireless network"
        ],

        answer: 2
    },

    {
        id: 33,
        sourcePage: 52,
        category: "Security",
        type: "single",

        question:
            "Which component of the AAA service security model provides identity verification?",

        choices: [
            "Authorization",
            "Auditing",
            "Authentication",
            "Accounting"
        ],

        answer: 2
    },


    // =====================================================
    // ENDPOINTS AND MEDIA TYPES
    // =====================================================

    {
        id: 34,
        sourcePage: 55,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "Which wireless security option uses a pre-shared key to authenticate clients?",

        choices: [
            "WPA2-Personal",
            "802.1x",
            "802.1q",
            "WPA2-Enterprise"
        ],

        answer: 0
    },

    {
        id: 35,
        sourcePage: 56,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "You need to connect a computer's network adapter to a switch using a 1000BASE-T cable. Which connector should you use?",

        choices: [
            "Coax",
            "RJ-11",
            "OS2 LC",
            "RJ-45"
        ],

        answer: 3
    },

    {
        id: 36,
        sourcePage: 57,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "Which type of connector should you use to terminate unshielded twisted pair (UTP) cable?",

        choices: [
            "ST (Straight Tip)",
            "SC (Subscriber Connector)",
            "RJ-45 (Registered Jack 45)",
            "OS2 LC"
        ],

        answer: 2
    },

    {
        id: 37,
        sourcePage: 58,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "You want to store files that will be accessible by every user on your network. Which endpoint device do you need?",

        choices: [
            "Access point",
            "Server",
            "Hub",
            "Switch"
        ],

        answer: 1
    },

    {
        id: 38,
        sourcePage: 61,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "Which standard contains the specifications for Wi-Fi networks?",

        choices: [
            "GSM",
            "LTE",
            "IEEE 802.11",
            "IEEE 802.3",
            "EIA/TIA 568A"
        ],

        answer: 2
    },

    {
        id: 39,
        sourcePage: 62,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "Which device is an Internet of Things (IoT) device?",

        choices: [
            "An internet-accessible thermostat",
            "A video streaming server",
            "A virtual private network concentrator",
            "A cloud-based file storage array"
        ],

        answer: 0
    },

    {
        id: 40,
        sourcePage: 63,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "Which network technology is not impacted by electromagnetic and radio wave interference?",

        choices: [
            "Wireless",
            "Twisted Pair",
            "Fiber",
            "Copper"
        ],

        answer: 2
    },

    {
        id: 41,
        sourcePage: 64,
        category: "Endpoints and Media Types",
        type: "single",

        question:
            "A Cisco switch is not accessible from the network. You need to view its running configuration. Which out-of-band method can you use to access it?",

        choices: [
            "SSH",
            "SNMP",
            "Console",
            "Telnet"
        ],

        answer: 2
    },


    // =====================================================
    // INFRASTRUCTURE / DIAGNOSING
    // =====================================================

    {
        id: 42,
        sourcePage: 68,
        category: "Infrastructure",
        type: "multiple",
        required: 2,

        question:
            "A local company requires two networks in two new buildings. The addresses used in these networks must be in the private network range. Which two address ranges should the company use?",

        choices: [
            "172.16.0.0 to 172.31.255.255",
            "192.16.0.0 to 192.16.255.255",
            "11.0.0.0 to 11.255.255.255",
            "192.168.0.0 to 192.168.255.255"
        ],

        answer: [0, 3]
    },

    {
        id: 43,
        sourcePage: 72,
        category: "Diagnosing Problems",
        type: "multiple",
        required: 2,

        question:
            "Which two pieces of information should you include when you initially create a support ticket?",

        choices: [
            "A detailed description of the fault",
            "Details about the computers connected to the network",
            "A description of the conditions when the fault occurs",
            "The actions taken to resolve the fault",
            "The description of the top-down fault-finding procedure"
        ],

        answer: [0, 2]
    },

    {
        id: 44,
        sourcePage: 73,
        category: "Infrastructure",
        type: "multiple",
        required: 2,

        question:
            "Which two statements are true about the IPv4 address of the default gateway configured on a host?",

        choices: [
            "The IPv4 address of the default gateway must be the first host address in the subnet.",
            "The same default gateway IPv4 address is configured on each host on the local network.",
            "The default gateway is the Loopback0 interface IPv4 address of the router connected to the same local network as the host.",
            "The default gateway is the IPv4 address of the router interface connected to the same local network as the host.",
            "Hosts learn the default gateway IPv4 address through router advertisement messages."
        ],

        answer: [1, 3]
    },

    {
        id: 45,
        sourcePage: 75,
        category: "Diagnosing Problems",
        type: "single",

        question:
            "A help desk technician receives four trouble tickets. Which ticket should receive the highest priority and be addressed first?",

        choices: [
            "A user requests relocation of a printer to a different network jack in the same office.",
            "An online webinar is taking place in the conference room and the video conferencing equipment lost internet access.",
            "A user reports that response time for a cloud-based application is slower than usual.",
            "Two users report that wireless access in the cafeteria has been down for the last hour."
        ],

        answer: 1
    },

    {
        id: 46,
        sourcePage: 76,
        category: "Infrastructure",
        type: "single",

        question:
            "An engineer configured a new VLAN named VLAN2 for the Data Center team. When the team tries to ping addresses outside VLAN2 from a computer in VLAN2, they are unable to reach them. What should the engineer configure?",

        choices: [
            "Additional VLAN",
            "Default route",
            "Default gateway",
            "Static route"
        ],

        answer: 2
    },

    {
        id: 47,
        sourcePage: 77,
        category: "Diagnosing Problems",
        type: "single",

        question:
            "You suspect connectivity problems on iOS devices are related to SSID settings and network configuration. Which approach should you take to verify and rectify the network settings directly on the affected devices?",

        choices: [
            "Network Reset",
            "Manual Configuration",
            "Use Fing",
            "SSID Reconfiguration"
        ],

        answer: null,
        unverified: true
    },

    {
        id: 48,
        sourcePage: 81,
        category: "Infrastructure",
        type: "single",

        question:
            "A support technician examines the front panel of a Cisco switch and sees four Ethernet cables connected in the first four ports. Ports 1, 2, and 3 have a green LED. Port 4 has a blinking green light. What is the state of Port 4?",

        choices: [
            "Link is up and not stable",
            "Link is up and there is no activity",
            "Link is up with cable malfunctions",
            "Link is up and active"
        ],

        answer: 3
    },

    {
        id: 49,
        sourcePage: 82,
        category: "Infrastructure",
        type: "single",

        question:
            "A user's computer is connected to switch port Gi0/15. The status indicator for the port is blinking alternately green then amber. What does the light pattern indicate?",

        choices: [
            "The port is administratively shutdown",
            "The port is experiencing a high rate of errors",
            "The port is blocked by a firewall rule",
            "The port is not connected to a powered-on device"
        ],

        answer: 1
    },

    {
        id: 50,
        sourcePage: 92,
        category: "Infrastructure",
        type: "single",

        question:
            "A support technician examines the front panel of a Cisco switch and sees four Ethernet cables connected in the first four ports. Ports 1, 2, and 3 have a green LED. Port 4 has a blinking green light. What is the state of Port 4?",

        choices: [
            "Link is up with cable malfunctions",
            "Link is up and not stable",
            "Link is up and active",
            "Link is up and there is no activity"
        ],

        answer: 2
    },

    {
        id: 51,
        sourcePage: 93,
        category: "Infrastructure",
        type: "single",

        question:
            "What is the purpose of assigning an IP address to the management VLAN interface on a Layer 2 switch?",

        choices: [
            "To enable the switch to act as a default gateway for the attached devices",
            "To enable the switch to resolve URLs for the attached devices",
            "To enable the switch to provide DHCP services to other switches in the network",
            "To enable access to the CLI on the switch through Telnet or SSH"
        ],

        answer: 3
    },

    {
        id: 52,
        sourcePage: 95,
        category: "Diagnosing Problems",
        type: "single",

        question:
            "A network administrator can successfully ping www.cisco.com, but cannot ping a corporate server located at a remote branch in another city. You need to identify the specific router where packets are being dropped in the path to the remote branch. Which utility should you use?",

        choices: [
            "Traceroute",
            "Netstat",
            "Telnet",
            "ipconfig"
        ],

        answer: 0
    },

    {
        id: 53,
        sourcePage: 96,
        category: "Diagnosing Problems",
        type: "multiple",
        required: 2,

        question:
            "You need to determine whether a remote host is reachable through the network. Which two commands can you use?",

        choices: [
            "Netstat",
            "Ping",
            "Route print",
            "Ipconfig",
            "Traceroute or tracert"
        ],

        answer: [1, 4]
    },

    {
        id: 54,
        sourcePage: 97,
        category: "Infrastructure",
        type: "single",

        question:
            "In a network with multiple VLANs, a user is unable to communicate with other users in the same VLAN but can communicate with users in different VLANs. Which of the following could be the cause of this issue?",

        choices: [
            "The user's switchport is not configured as an access port.",
            "The user's switchport is not assigned to the correct VLAN.",
            "The user's switchport is configured with the wrong duplex setting.",
            "The user's switchport is experiencing a spanning tree loop."
        ],

        answer: null,
        sourceIssue: true
    },

    {
        id: 55,
        sourcePage: 98,
        category: "Diagnosing Problems",
        type: "single",

        question:
            "A user initiates a trouble ticket stating that an external web page is not loading. You determine that other resources both internal and external are still reachable. Which command can you use to help locate where the issue is in the network path to the external web page?",

        choices: [
            "ping -t",
            "tracert",
            "ipconfig/all",
            "nslookup"
        ],

        answer: 1
    }
    ,
{
    id: 56,
    sourcePage: 17,
    category: "Standard Concepts",
    type: "matching",

    question:
        "Move each protocol to its correct characteristic.",

    items: [
        {
            label: "SFTP",
            answer: "Ensures data integrity and data security for file transfers using port 22."
        },
        {
            label: "TFTP",
            answer: "Transfers small files within a LAN using port 69."
        },
        {
            label: "DNS",
            answer: "Performs a query to translate companypro.net to an IP address."
        },
        {
            label: "DHCP",
            answer: "Assigns the reserved IP address 10.10.10.200 to a web server."
        },
        {
            label: "ICMP",
            answer: "Performs a ping to ensure that a server is responding to network connections."
        }
    ],

    options: [
        "Ensures data integrity and data security for file transfers using port 22.",
        "Transfers small files within a LAN using port 69.",
        "Performs a query to translate companypro.net to an IP address.",
        "Assigns the reserved IP address 10.10.10.200 to a web server.",
        "Performs a ping to ensure that a server is responding to network connections."
    ]
},

{
    id: 57,
    sourcePage: 18,
    category: "Standard Concepts",
    type: "matching",

    question:
        "Move each protocol or device type to the correct OSI layer.",

    items: [
        {
            label: "SMTP, FTP",
            answer: "Application"
        },
        {
            label: "TCP, UDP",
            answer: "Transport"
        },
        {
            label: "Cable, Hub, NIC",
            answer: "Physical"
        },
        {
            label: "Switch",
            answer: "Data Link"
        },
        {
            label: "Router",
            answer: "Network"
        }
    ],

    options: [
        "Physical",
        "Data Link",
        "Network",
        "Application",
        "Transport"
    ]
},

{
    id: 58,
    sourcePage: 19,
    category: "Standard Concepts",
    type: "matching",

    question:
        "Move each protocol to the correct TCP/IP model layer.",

    items: [
        {
            label: "TCP",
            answer: "Transport"
        },
        {
            label: "IP",
            answer: "Internetwork"
        },
        {
            label: "FTP",
            answer: "Application"
        },
        {
            label: "Ethernet",
            answer: "Network"
        }
    ],

    options: [
        "Internetwork",
        "Application",
        "Transport",
        "Network"
    ]
},

{
    id: 59,
    sourcePage: 20,
    category: "Standard Concepts",
    type: "matching",

    question:
        "Move each category to its correct definition.",

    items: [
        {
            label: "PAN",
            answer: "Connects devices such as computers, telephones, tablets, and printers within a range of about 10 meters."
        },
        {
            label: "LAN",
            answer: "Spans a small area such as a room, home, office building, or small group of buildings."
        },
        {
            label: "WAN",
            answer: "Spans a large geographical distance and connects smaller networks over leased lines, VPNs, or tunnels."
        }
    ],

    options: [
        "Connects devices such as computers, telephones, tablets, and printers within a range of about 10 meters.",
        "Spans a small area such as a room, home, office building, or small group of buildings.",
        "Spans a large geographical distance and connects smaller networks over leased lines, VPNs, or tunnels."
    ]
},

{
    id: 60,
    sourcePage: 22,
    category: "Standard Concepts",
    type: "matching",

    question:
        "For each statement about bandwidth and throughput, select True or False.",

    items: [
        {
            label: "High levels of network latency decreases network bandwidth.",
            answer: null
        },
        {
            label: "Low bandwidth can increase network latency.",
            answer: null
        },
        {
            label: "You can increase throughput by decreasing network ...",
            answer: null
        }
    ],

    options: [
        "True",
        "False"
    ],

    unverified: true,
    sourceIssue: true
},

{
    id: 61,
    sourcePage: 23,
    category: "Standard Concepts",
    type: "matching",

    question:
        "Move each cloud computing service model to the correct example.",

    items: [
        {
            label: "PaaS",
            answer: "A company develops applications using cloud-based resources and tools."
        },
        {
            label: "IaaS",
            answer: "Virtual machines are connected by a virtual network in the cloud."
        },
        {
            label: "SaaS",
            answer: "Users access a web-based graphics design application in the cloud for a monthly fee."
        }
    ],

    options: [
        "A company develops applications using cloud-based resources and tools.",
        "Virtual machines are connected by a virtual network in the cloud.",
        "Users access a web-based graphics design application in the cloud for a monthly fee."
    ]
},

{
    id: 62,
    sourcePage: 24,
    category: "Standard Concepts",
    type: "matching",

    question:
        "Move each cloud service model to its correct description.",

    items: [
        {
            label: "PaaS",
            answer: "Provides the hardware and software needed for developing, running, and managing applications."
        },
        {
            label: "IaaS",
            answer: "Provides pay-as-you-go access to resources provided on virtual machines and virtual storage."
        },
        {
            label: "SaaS",
            answer: "Provides on-demand access to applications delivered remotely over the internet."
        }
    ],

    options: [
        "Provides the hardware and software needed for developing, running, and managing applications.",
        "Provides pay-as-you-go access to resources provided on virtual machines and virtual storage.",
        "Provides on-demand access to applications delivered remotely over the internet."
    ]
},

// =====================================================
// SECURITY MATCHING QUESTIONS
// =====================================================

{
    id: 63,
    sourcePage: 44,
    category: "Security",
    type: "matching",

    question:
        "For each statement about a network firewall, select True or False.",

    items: [
        {
            label: "A firewall can block traffic to specific ports on internal computers.",
            answer: "True"
        },
        {
            label: "A firewall can direct all web traffic to a specific IP address.",
            answer: "True"
        },
        {
            label: "A firewall can prevent specific apps from running on a computer.",
            answer: "False"
        }
    ],

    options: [
        "True",
        "False"
    ]
},

{
    id: 64,
    sourcePage: 48,
    category: "Security",
    type: "matching",

    question:
        "Move the CIA security principles to their correct examples.",

    items: [
        {
            label: "Integrity",
            answer: "You generate a digital signature and attach it to a message."
        },
        {
            label: "Confidentiality",
            answer: "You encrypt a sensitive email message."
        },
        {
            label: "Availability",
            answer: "You configure three redundant web servers at your company."
        }
    ],

    options: [
        "You generate a digital signature and attach it to a message.",
        "You encrypt a sensitive email message.",
        "You configure three redundant web servers at your company."
    ]
},

{
    id: 65,
    sourcePage: 49,
    category: "Security",
    type: "matching",

    question:
        "Move the MFA factors to their correct examples.",

    items: [
        {
            label: "Knowledge",
            answer: "Specifying your name and password to log on to a service."
        },
        {
            label: "Possession",
            answer: "Entering a one-time security code sent to your device after logging in."
        },
        {
            label: "Inherence",
            answer: "Holding your phone to your face to be recognized."
        }
    ],

    options: [
        "Specifying your name and password to log on to a service.",
        "Entering a one-time security code sent to your device after logging in.",
        "Holding your phone to your face to be recognized."
    ]
},

{
    id: 66,
    sourcePage: 50,
    category: "Security",
    type: "matching",

    question:
        "Move each security option to its correct characteristic.",

    items: [
        {
            label: "WEP",
            answer: "Uses a minimum of 40 bits for encryption."
        },
        {
            label: "WPA-Enterprise",
            answer: "Uses a RADIUS server for authentication."
        },
        {
            label: "WPA2-Personal",
            answer: "Uses AES and a pre-shared key for authentication."
        }
    ],

    options: [
        "Uses a minimum of 40 bits for encryption.",
        "Uses a RADIUS server for authentication.",
        "Uses AES and a pre-shared key for authentication."
    ]
},

{
    id: 67,
    sourcePage: 51,
    category: "Security",
    type: "matching",

    question:
        "Move each action to the correct wireless-network scenario.",

    items: [
        {
            label: "You want to prevent users from using the push-button method for accessing the network.",
            answer: "Disable WPS"
        },
        {
            label: "You want devices to use a pre-shared key when connecting to the network.",
            answer: "Set the security mode to WPA2-PSK"
        },
        {
            label: "You want to prevent devices from discovering the name of the Wi-Fi network.",
            answer: "Disable SSID broadcasting"
        }
    ],

    options: [
        "Set the security mode to WPA2-PSK",
        "Disable SSID broadcasting",
        "Disable WPS"
    ]
},

// =====================================================
// EXHIBIT / INFRASTRUCTURE QUESTIONS
// =====================================================

{
    id: 68,
    sourcePage: 59,
    category: "Endpoints and Media Types",
    type: "single",

    exhibit: "images/exhibit-59.png",

    question:
        "What type of interface is the administrator installing in the router?",

    choices: [
        "USB (Universal Serial Bus)",
        "SFP (Small Form-factor Pluggable)",
        "Serial",
        "PoE (Power over Ethernet)"
    ],

    answer: 1
},

{
    id: 69,
    sourcePage: 67,
    category: "Infrastructure",
    type: "matching",

    exhibit: "images/exhibit-67.png",

    question:
        "Examine the connections shown in the exhibit. Move the cable types to the appropriate connection descriptions.",

    items: [
        {
            label: "Switch to Router R1 Gi0/0/1 interface",
            answer: "Straight-through UTP Cable"
        },
        {
            label: "Router R2 Gi0/0/0 to Router R3 Gi0/0/0 via underground conduit",
            answer: "Fiber Optic Cable"
        },
        {
            label: "Router R1 Gi0/0/0 to Router R2 Gi0/0/1",
            answer: "Crossover UTP Cable"
        },
        {
            label: "Switch S3 to Server0 network interface card",
            answer: "Straight-through UTP Cable"
        }
    ],

    options: [
        "Straight-through UTP Cable",
        "Fiber Optic Cable",
        "Crossover UTP Cable"
    ]
},

{
    id: 70,
    sourcePage: 71,
    category: "Diagnosing Problems",
    type: "multiple",
    required: 2,

    exhibit: "images/exhibit-71.png",

    question:
        "Examine the command output. Which two conclusions can you make from the output of the tracert command?",

    choices: [
        "The trace successfully reached the www.cisco.com server.",
        "The trace failed after the fourth hop.",
        "The IPv6 address associated with the www.cisco.com server is 2600:1408:c400:38d::b33.",
        "The routers at hops 5 and 6 are offline.",
        "The device sending the trace has IPv6 address 2600:1408:c400:38d::b33."
    ],

    answer: [0, 2]
},

{
    id: 71,
    sourcePage: 74,
    category: "Infrastructure",
    type: "matching",

    exhibit: "images/exhibit-74.png",

    question:
        "An administrator is configuring host PC-A. What information must be entered in the IPv4 protocol properties window?",

    items: [
        {
            label: "IP Address",
            answer: null
        },
        {
            label: "Subnet Mask",
            answer: "255.255.0.0"
        },
        {
            label: "Default Gateway",
            answer: "172.100.0.1"
        },
        {
            label: "Preferred DNS Server",
            answer: "172.100.0.25"
        }
    ],

    options: [
        "A valid unused host address in 172.100.0.0/16",
        "255.255.0.0",
        "172.100.0.1",
        "172.100.0.25",
        "172.100.0.254",
        "10.10.100.78",
        "10.10.100.254"
    ],

    unverified: true,
    sourceIssue: true
},

{
    id: 72,
    sourcePage: 78,
    category: "Infrastructure",
    type: "multiple",
    required: 2,

    exhibit: "images/exhibit-78.png",

    question:
        "Which two statements are true about the impact to communication on the network while the router is temporarily offline?",

    choices: [
        "None of the PCs can access the file server (File-Srv).",
        "The file server (File-Srv) can still access the internet.",
        "PC-A and PC-B can still communicate with each other.",
        "PC-A, PC-B, PC-C and PC-D can still communicate with each other.",
        "PC-C and PC-D can still communicate with the file server (File-Srv)."
    ],

    answer: [0, 3]
},

{
    id: 73,
    sourcePage: 79,
    category: "Infrastructure",
    type: "single",

    exhibit: "images/exhibit-79.png",

    question:
        "Which action does Switch1 take?",

    choices: [
        "Switch1 queries Switch2 for the MAC address of PC-C.",
        "Switch1 drops the frame and sends an error message back to PC-A.",
        "Switch1 sends an ARP request to obtain the MAC address of PC-C.",
        "Switch1 floods the frame out all active ports except port Gi0/1."
    ],

    answer: 3
},

{
    id: 74,
    sourcePage: 80,
    category: "Infrastructure",
    type: "single",

    exhibit: "images/exhibit-80.png",

    question:
        "The laptop sends a broadcast frame to the first switch. Which ports forward the broadcast frame?",

    choices: [
        "D only",
        "A, B and D only",
        "B and C only",
        "B, C and D only"
    ],

    answer: 3
},

{
    id: 75,
    sourcePage: 83,
    category: "Diagnosing Problems",
    type: "single",

    exhibit: "images/exhibit-83.png",

    question:
        "What can you tell from the command output?",

    choices: [
        "The server with address 192.168.1.10 is reachable over the network.",
        "The router at hop 3 is not forwarding packets to the IP address 192.168.1.10.",
        "Requests to the web server at 192.168.1.10 are being delayed and time out.",
        "The server address 192.168.1.10 is being blocked by a firewall on the router at hop 3."
    ],

    answer: 0
},

{
    id: 76,
    sourcePage: 84,
    category: "Diagnosing Problems",
    type: "single",

    exhibit: "images/exhibit-84.png",

    question:
        "Which action can be run directly from the Cisco router's IOS mode shown?",

    choices: [
        "Enable a routing process",
        "Show running system information",
        "Enter interface IP configuration subcommands",
        "Select an interface to configure"
    ],

    answer: 1
},

{
    id: 77,
    sourcePage: 85,
    category: "Infrastructure",
    type: "single",

    exhibit: "images/exhibit-85.png",

    question:
        "What can you determine about this switch from the command output?",

    choices: [
        "There are eleven active ports on this switch.",
        "Port Fa0/5 is set to administratively down.",
        "All entries were learned by examining incoming frames.",
        "Port Gi0/1 connects to another switch."
    ],

    answer: 3
},

{
    id: 78,
    sourcePage: 86,
    category: "Diagnosing Problems",
    type: "matching",

    exhibit: "images/exhibit-86.png",

    question:
        "For each statement about the output, select True or False.",

    items: [
        {
            label: "A device connected to GigabitEthernet0/1 can send out broadcast traffic.",
            answer: "False"
        },
        {
            label: "A technician issued the shutdown command on interface GigabitEthernet0/2.",
            answer: "True"
        },
        {
            label: "A technician set the IP address for GigabitEthernet0/0 by using the CLI.",
            answer: "True"
        }
    ],

    options: [
        "True",
        "False"
    ]
},

{
    id: 79,
    sourcePage: 87,
    category: "Infrastructure",
    type: "single",

    exhibit: "images/exhibit-87.png",

    question:
        "You purchase a new Cisco switch, turn it on, connect to its console port, and run the command shown. Which statement is true?",

    choices: [
        "The two interfaces can communicate over Layer 2.",
        "The two interfaces are administratively shut down.",
        "The two interfaces have default IP addresses assigned."
    ],

    answer: 0
},

{
    id: 80,
    sourcePage: 88,
    category: "Diagnosing Problems",
    type: "single",

    exhibit: "images/exhibit-88.png",

    question:
        "You need to issue a command to view the network devices in the path from the computer to the server that resolves the host name. What command should you issue?",

    choices: [
        "ping 64.100.8.8",
        "tracert 64.100.8.8",
        "nslookup 64.100.8.8",
        "ipconfig 64.100.8.8"
    ],

    answer: 1
},

// =====================================================
// REMAINING DIAGNOSTIC QUESTIONS
// =====================================================

{
    id: 81,
    sourcePage: 89,
    category: "Diagnosing Problems",
    type: "single",

    question:
        "An app uses https://www.companypro.net:7100/api. You need to use Wireshark to capture packets sent to and received from that URL. What Wireshark filter option should you use?",

    choices: [
        "tcp.port == 7100",
        "udp.port == 7100",
        "http.port == 7100",
        "ip.port == 7100"
    ],

    answer: 0,
    inferred: true
},

{
    id: 82,
    sourcePage: 90,
    category: "Diagnosing Problems",
    type: "single",

    exhibit: "images/exhibit-90.png",

    question:
        "Computers in a small office are unable to access companypro.net. You need to determine if you can reach the router. Which command should you use?",

    choices: [
        "ping 192.168.0.1",
        "ping 192.168.0.14",
        "ping 192.168.0.255",
        "ping 8.8.8.8"
    ],

    answer: 0
},

{
    id: 83,
    sourcePage: 91,
    category: "Diagnosing Problems",
    type: "single",

    question:
        "You want to list the IPv4 addresses associated with the host name www.companypro.net. What command should you execute?",

    choices: [
        "nslookup www.companypro.net",
        "ping www.companypro.net",
        "tracert www.companypro.net",
        "ipconfig www.companypro.net"
    ],

    answer: 0,
    inferred: true
},

{
    id: 84,
    sourcePage: 94,
    category: "Diagnosing Problems",
    type: "single",

    exhibit: "images/exhibit-94.png",

    question:
        "What command will display the output shown in the exhibit?",

    choices: [
        "show ip interface brief",
        "show mac address-table",
        "show cdp neighbors",
        "show ip route"
    ],

    answer: 2
},

// =====================================================
// FINAL MISSING REVIEWER QUESTIONS
// =====================================================

{
    id: 85,
    sourcePage: 35,
    category: "Standard Concepts",
    type: "single",

    question:
        "What protocol is used by OSPF to form neighbor relationships and exchange routing information?",

    choices: [
        "CP (Control Protocol)",
        "P (Protocol)",
        "MP (Multiprotocol)",
        "Llo (Link-Local Operations)"
    ],

    // The reviewer highlights D.
    // Preserved faithfully, but excluded from scoring
    // because the source question/answer is questionable.
    answer: 3,

    sourceIssue: true
},

{
    id: 86,
    sourcePage: 60,
    category: "Endpoints and Media Types",
    type: "single",

    question:
        "A Cisco PoE switch is shown in the following image. Which type of port will provide both data connectivity and power to an IP phone?",

    choices: [
        "Port identified with number 2",
        "Ports identified with number 6",
        "Ports identified with number 7",
        "Ports identified with number 3 and 4"
    ],

    answer: 1
}

];