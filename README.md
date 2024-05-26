# Peer-to-Peer File Sharing System

This repository contains the code for a Peer-to-Peer (P2P) File Sharing System developed for a course in Parallel and Distributed Computing. The system leverages SQL for database management, Node.js and Express.js for server-side logic, and React.js for client-side logic handling. It features a central metadata server and multiple peers that communicate directly for file transfers, ensuring efficient and decentralized file sharing.

## Architecture

The system consists of two main components:

1. **Metadata Server**: Maintains a SQL database with records of files being shared by each peer, along with connection parameters.
2. **Peers**: Query the metadata server for available files and directly download files from each other using provided connection parameters.

**Features**
**Decentralized File Sharing:** Files are shared directly between peers, reducing the load on the metadata server.

**Scalability:** The system can scale horizontally by adding more peers without significantly increasing the load on the metadata server.

**Real-time Updates:** Peers can get real-time updates of available files and their respective sources from the metadata server.

**Efficient Resource Usage:** The metadata server only handles metadata, not actual file transfers, making it efficient in terms of resource usage.

**Network-agnostic Sharing:** Files can be shared over the same network between different computers.

**File Size Independence:** Supports the sharing of files of any size.

**User-friendly Interface:** A React.js-based user interface ensures an intuitive and easy-to-use experience.

**Seamless Integration:** Can easily integrate with existing network setups with minimal configuration.

**Cross-platform Compatibility:** Works across different operating systems, including Windows, macOS, and Linux.


**Usage**
**Register a file with the metadata server:** Use the client interface to register files you want to share.
**Retrieve the list of available files**: Use the client interface to query the metadata server for available files and their sources.
**Download files from peers:** Use the connection parameters provided by the metadata server to directly download files from other peers.

**Contributing**
Contributions are welcome! Please fork this repository and submit pull requests for any features, bug fixes, or improvements.

**License**
This project is licensed under the MIT License. See
